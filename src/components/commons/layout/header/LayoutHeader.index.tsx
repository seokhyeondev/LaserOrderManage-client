import {
  HeaderButton,
  InnerWrapper,
  LogoWrapper,
  MenuItem,
  MenuWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import Image from "next/image";

const NAVIGATION_MENU = [
  { name: "견적 요청하기", page: "/" },
  { name: "거래 목록", page: "/customer/order" },
];

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Image
            width={180}
            height={33}
            src="/images/mainLogo.jpg"
            alt="메인 로고"
            onClick={onClickMoveToPage("/")}
          />
        </LogoWrapper>
        <MenuWrapper>
          {NAVIGATION_MENU.map((el) => (
            <MenuItem
              key={el.page}
              className="medium20"
              onClick={onClickMoveToPage(el.page)}
            >
              {el.name}
            </MenuItem>
          ))}
        </MenuWrapper>
      </InnerWrapper>
      <HeaderButton className="bold16" onClick={onClickMoveToPage("/login")}>
        로그인
      </HeaderButton>
    </Wrapper>
  );
}
