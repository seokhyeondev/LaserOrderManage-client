import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { useEffect } from "react"
import AddressItem from "./items/AddressItem.index";
import AddressModal from "@/src/components/commons/modal/address/AddressModal.index";
import { useState } from "react";
import { ICreateOrderPageProps } from "../CreateOrder.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { useRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder"

export default function DeliveryInfo(props: ICreateOrderPageProps) {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  const [orderState, setOrderState] = useRecoilState(createOrderState);
  const data: IDeliveryAddress[] = [
    {id: 0, name: "회원 주소", zipCode: "1234", address: "서울 마포구 성미산로 160", detailAddress: "휴먼빌", receiver: "안승우", phone1: "01001234000", phone2: null, isDefault: true},
    {id: 1, name: "회원 주소2", zipCode: "1234", address: "서울 마포구 성미산로 160", detailAddress: "휴먼빌", receiver: "안승우", phone1: "01000000000", phone2: null, isDefault: false},
    {id: 2, name: "회원 주소3", zipCode: "1234", address: "서울 마포구 성미산로 160", detailAddress: "휴먼빌", receiver: "안승우", phone1: "01000000000", phone2: null, isDefault: false}
  ];
  
  useEffect(() => {
    setSelectedAddressId(orderState.deliveryAddressId);
  }, []);

  const onBefore = () => {
    setOrderState({
      ...orderState,
      deliveryAddressId: selectedAddressId
    });
    if(props.onBefore) props.onBefore();
  }

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
            {data.map((el) => (
              <AddressItem 
                key={el.id} 
                data={el} 
                selectedId={selectedAddressId} 
                onSelect={(id: number) => setSelectedAddressId(id)}/>
            ))}
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
            <S.BackButton className="bold20" onClick={onBefore}>
              이전
            </S.BackButton>
            <S.NextButton 
              className="bold20" 
              enabled={selectedAddressId !== undefined} 
              disabled={selectedAddressId === undefined}
            >
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
