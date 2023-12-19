import styled from "@emotion/styled";
import MyPageMenu from "@/src/components/commons/menu/mypage/MyPageMenu.index";

export default function MyPage() {
  return (
    <Wrapper className="flex-row">
      <MyPageMenu />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightGray);
`;
