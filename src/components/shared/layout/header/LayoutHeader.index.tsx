import * as S from "./LayoutHeader.styles";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const NAVIGATION_MENU_DEFAULT = [
  { name: "견적 요청하기", page: "/customer/order/create" },
  { name: "거래 목록", page: "/customer/order" },
];

const NAVIGATION_MENU_FACTORY = [
  { name: "신규 거래 목록", page: "/factory/order/new" },
  { name: "거래 내역", page: "/factory/order" },
];

export default function LayoutHeader() {
  const auth = useRecoilValue(authState);
  const router = useRouter();

  return (
    <S.Wrapper className="flex-row-between-center">
      <S.InnerWrapper className="flex-row">
        <S.LogoWrapper>
          <Image
            width={180}
            height={33}
            src="/images/mainLogo.png"
            alt="메인 로고"
            onClick={() => router.push("/")}
            priority
          />
        </S.LogoWrapper>
        <S.MenuWrapper className="flex-row-align-center">
          {auth.role === null &&
            NAVIGATION_MENU_DEFAULT.map((el) => (
              <Link href={"/login"} key={el.page} className="medium20">
                {el.name}
              </Link>
            ))}
          {auth.role === "ROLE_CUSTOMER" &&
            NAVIGATION_MENU_DEFAULT.map((el) => (
              <Link href={el.page} key={el.page} className="medium20">
                {el.name}
              </Link>
            ))}
          {auth.role === "ROLE_FACTORY" &&
            NAVIGATION_MENU_FACTORY.map((el) => (
              <Link href={el.page} key={el.page} className="medium20">
                {el.name}
              </Link>
            ))}
        </S.MenuWrapper>
      </S.InnerWrapper>
      {!auth.isAuthenticated && (
        <Link href={"/login"}>
          <S.HeaderButton className="bold16">로그인</S.HeaderButton>
        </Link>
      )}
      {auth.isAuthenticated && (
        <Link href={"/mypage"}>
          <S.HeaderButton className="bold16">마이페이지</S.HeaderButton>
        </Link>
      )}
    </S.Wrapper>
  );
}
