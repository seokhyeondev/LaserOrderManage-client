import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import { useState } from "react";
import ManagerItem from "./items/MangerItem.index";
import ManagerModal from "@/src/components/commons/modal/mypage/ManagerModal.index";

export default function ManagerListPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <S.Wrapper>
        <S.Title className="bold24">담당자 관리</S.Title>
        <S.BodyWrapper>
          <div>
            <ManagerItem />
          </div>
          <Spacer width="100%" height="16px" />
          <S.AddWrapper
            className="regular14 flex-center"
            onClick={() => setShowModal(true)}
          >
            + 담당자 추가하기
          </S.AddWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      <ManagerModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
