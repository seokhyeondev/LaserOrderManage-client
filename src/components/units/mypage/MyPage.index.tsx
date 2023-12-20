import styled from "@emotion/styled";
import MyPageMenu from "@/src/components/commons/menu/mypage/MyPageMenu.index";
import { useState } from "react";
import { IMyPageMenu } from "@/src/components/commons/menu/mypage/MyPageMenu.types";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";

export default function MyPage() {
  const [currentPage, setCurrentPage] = useState<IMyPageMenu>("Account");
  const auth = useRecoilValue(authState);

  const onChangePage = (page: IMyPageMenu) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <Wrapper className="flex-row">
      <MyPageMenu
        currentPage={currentPage}
        role={auth.role}
        onChangePage={onChangePage}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightGray);
`;
