import {
  HeaderButton,
  InnerWrapper,
  MenuItem,
  MenuWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import Image from "next/image";

const NAVIGATION_MENU = [
  { name: "견적 요청하기", page: "/request" },
  { name: "거래 목록", page: "/list" },
];

export default function LayoutHeader() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Image
          width={180}
          height={33}
          src="/images/mainLogo.jpg"
          alt="메인 로고"
        />
        <MenuWrapper>
          {NAVIGATION_MENU.map((el) => (
            <MenuItem className="medium20" key={el.page}>
              {el.name}
            </MenuItem>
          ))}
        </MenuWrapper>
      </InnerWrapper>
      <HeaderButton className="bold16">로그인</HeaderButton>
    </Wrapper>
  );
}
