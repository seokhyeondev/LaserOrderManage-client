import * as S from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import Image from "next/image";

const NAVIGATION_MENU = [
  { name: "견적 요청하기", page: "/" },
  { name: "거래 목록", page: "/customer/order" },
  { name: "신규 거래 목록", page: "/factory/order/new" },
  { name: "거래 내역", page: "/factory/order" },
];

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
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
          {NAVIGATION_MENU.map((el) => (
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
      <S.HeaderButton className="bold16" onClick={onClickMoveToPage("/login")}>
        로그인
      </S.HeaderButton>
    </S.Wrapper>
  );
}
