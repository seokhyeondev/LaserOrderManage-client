import { useMoveToPage } from "@/src/lib/hooks/useMoveToPage";
import * as S from "./LayoutHeader.styles";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authState, UserType } from "@/src/store/auth";

const NAVIGATION_MENU_DEFAULT = [
  { name: "견적 요청하기", page: "/" },
  { name: "거래 목록", page: "/customer/order" },
];

const NAVIGATION_MENU_FACTORY = [
  { name: "신규 거래 목록", page: "/factory/order/new" },
  { name: "거래 내역", page: "/factory/order" },
];

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const auth = useRecoilValue(authState);

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.LogoWrapper>
          <Image
            width={180}
            height={33}
            src="/images/mainLogo.jpg"
            alt="메인 로고"
            onClick={onClickMoveToPage("/")}
          />
        </S.LogoWrapper>
        <S.MenuWrapper>
          {auth.role !== "ROLE_FACTORY"
            ? NAVIGATION_MENU_DEFAULT.map((el) => (
                <S.MenuItem
                  key={el.page}
                  className="medium20"
                  onClick={onClickMoveToPage(el.page)}
                >
                  {el.name}
                </S.MenuItem>
              ))
            : NAVIGATION_MENU_FACTORY.map((el) => (
                <S.MenuItem
                  key={el.page}
                  className="medium20"
                  onClick={onClickMoveToPage(el.page)}
                >
                  {el.name}
                </S.MenuItem>
              ))}
        </S.MenuWrapper>
      </S.InnerWrapper>
      <S.HeaderButton
        className="bold16"
        onClick={
          auth.isAuthenticated
            ? onClickMoveToPage("/login")
            : onClickMoveToPage("/login")
        }
      >
        {auth.isAuthenticated ? "마이페이지" : "로그인"}
      </S.HeaderButton>
    </S.Wrapper>
  );
}
