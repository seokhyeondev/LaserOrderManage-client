import * as S from "./LayoutHeader.styles";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import Link from "next/link";

import { AppPages } from "@/src/lib/constants/appPages";
import { useRouter } from "next/router";
import HeaderMenuIcon from "@/src/components/commons/icons/HeaderMenuIcon.index";
import MainLogo from "@/src/components/commons/logo/MainLogo.index";

const NAVIGATION_DEFAULT_MENU = [
  { name: "견적 요청하기", page: AppPages.CUSTOMER_CREATE_ORDER },
  { name: "거래 목록", page: AppPages.CUSTOMER_ORDER_LIST },
];

const NAVIGATION_FACTORY_MENU = [
  { name: "신규 거래 목록", page: AppPages.FACTORY_NEW_ORDER_LIST },
  { name: "거래 내역", page: AppPages.FACTORY_ORDER_LIST },
];

export default function LayoutHeader() {
  const auth = useRecoilValue(authState);
  const { asPath } = useRouter();
  const isHome = asPath === AppPages.HOME;

  return (
    <S.Wrapper className="flex-row-between-center" isHome={isHome}>
      <MainLogo isHome={isHome} />
      <S.PcMenu className="flex-row">
        <S.MenuWrapper className="flex-row-align-center" isHome={isHome}>
          {auth.role === null &&
            NAVIGATION_DEFAULT_MENU.map((el) => (
              <Link href={AppPages.LOGIN} key={el.page} className="bold18">
                {el.name}
              </Link>
            ))}
          {auth.role === "ROLE_CUSTOMER" &&
            NAVIGATION_DEFAULT_MENU.map((el) => (
              <Link href={el.page} key={el.page} className="bold18">
                {el.name}
              </Link>
            ))}
          {auth.role === "ROLE_FACTORY" &&
            NAVIGATION_FACTORY_MENU.map((el) => (
              <Link href={el.page} key={el.page} className="bold18">
                {el.name}
              </Link>
            ))}
        </S.MenuWrapper>
        {!auth.isAuthenticated && (
          <Link href={AppPages.LOGIN}>
            <S.HeaderButton className="bold16">로그인</S.HeaderButton>
          </Link>
        )}
        {auth.isAuthenticated && (
          <Link href={AppPages.MY_PAGE}>
            <S.HeaderButton className="bold16">마이페이지</S.HeaderButton>
          </Link>
        )}
      </S.PcMenu>
      <S.MenuIconWrapper>
        <HeaderMenuIcon size={32} isHome={isHome} />
      </S.MenuIconWrapper>
    </S.Wrapper>
  );
}
