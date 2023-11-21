import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import AddressItem from "./items/AddressItem.index";
import AddressModal from "@/src/components/commons/modal/address/AddressModal.index";
import { useState } from "react";

export default function DeliveryInfo() {
  const [addressModalOpen, setAddressModalOpen] = useState(true);
  return (
    <>
      <S.FormWrapper className="flex-column">
        <S.FormBodyWrapper>
          <S.FormTitle className="bold24">배송 정보</S.FormTitle>
          <Spacer width="100%" height="50px" />
          <div className="flex-row">
            <S.FormLabel className="medium20">
              배송지를 선택해주세요
            </S.FormLabel>
            <S.RequiredLabel className="medium20">*</S.RequiredLabel>
          </div>
          <Spacer width="100%" height="30px" />
          <div>
            <AddressItem />
          </div>
          <Spacer width="100%" height="24px" />
          <S.NewAddressLabel
            className="bold14"
            onClick={() => setAddressModalOpen(true)}
          >
            새로운 배송지 등록하기
          </S.NewAddressLabel>
        </S.FormBodyWrapper>
        <S.FormButtonWrapper className="flex-column-end">
          <div className="flex-row">
            <S.BackButton className="bold20">이전</S.BackButton>
            <S.NextButton className="bold20" enabled={true}>
              견적 요청하기
            </S.NextButton>
          </div>
        </S.FormButtonWrapper>
      </S.FormWrapper>
      <AddressModal
        isOpen={addressModalOpen}
        onClose={() => setAddressModalOpen(false)}
      />
    </>
  );
}
