import styled from "@emotion/styled";
import MyPageMenu from "@/src/components/commons/menu/mypage/MyPageMenu.index";
import { useState } from "react";
import { IMyPageMenu } from "@/src/components/commons/menu/mypage/MyPageMenu.types";

export default function MyPage() {
  const [currentPage, setCurrentPage] = useState<IMyPageMenu>("Account");

  const onChangePage = (page: IMyPageMenu) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <Wrapper className="flex-row">
      <MyPageMenu currentPage={currentPage} onChangePage={onChangePage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightGray);
`;
