import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import DeliveryItem from "./items/DeliveryItem.index";
import { useState } from "react";
import AddressModal from "@/src/components/commons/modal/address/AddressModal.index";

export default function DeliveryPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Title className="bold24">배송지 설정</S.Title>
        <S.BodyWrapper>
          <div>
            <DeliveryItem />
          </div>
          <Spacer width="100%" height="16px" />
          <S.AddWrapper
            className="regular14 flex-center"
            onClick={() => setShowModal(true)}
          >
            + 배송지 추가하기
          </S.AddWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      <AddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        refetch={() => {}}
      />
    </>
  );
}
