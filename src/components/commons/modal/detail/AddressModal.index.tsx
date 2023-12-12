import Modal from "../Modal.index";
import { IDeliveryModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import Spacer from "../../spacer/Spacer.index";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { getPhoneNumber } from "@/src/lib/utils/utils";
import { useState } from "react";
import { useToast } from "react-toastify";
import { useToastify } from "@/src/lib/hooks/useToastify";

const addressList: IDeliveryAddress[] = [
  {
    id: 0,
    name: "회원 주소",
    zipCode: "11111",
    address: "서울 마포구 성미산로 160",
    detailAddress: "휴먼빌",
    receiver: "안승우",
    phone1: "01011111111",
    phone2: null,
    isDefault: true,
  },
  {
    id: 1,
    name: "회원 주소",
    zipCode: "11111",
    address: "서울 마포구 성미산로 160",
    detailAddress: "휴먼빌",
    receiver: "안승우",
    phone1: "01011111111",
    phone2: null,
    isDefault: false,
  },
  {
    id: 2,
    name: "회원 주소",
    zipCode: "11111",
    address: "서울 마포구 성미산로 160",
    detailAddress: "휴먼빌",
    receiver: "안승우",
    phone1: "01011111111",
    phone2: null,
    isDefault: false,
  },
  {
    id: 3,
    name: "회원 주소",
    zipCode: "11111",
    address: "서울 마포구 성미산로 160",
    detailAddress: "휴먼빌",
    receiver: "안승우",
    phone1: "01011111111",
    phone2: null,
    isDefault: false,
  },
];

export default function AddressModal({
  isOpen,
  data,
  onClose,
  callback,
}: IDeliveryModalProps) {
  const [selectedAddress, setSelectedAddress] =
    useState<IDeliveryAddress>(data);
  const { setToast } = useToastify();

  const onSubmit = () => {
    callback(selectedAddress);
    setToast({ comment: "배송지를 변경했어요" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper className="flex-column-start" width={600} height={600}>
        <S.Title className="bold20">배송지 수정하기</S.Title>
        <S.AddressItemsWrapper>
          {addressList.map((el) => (
            <AddressItem
              data={el}
              key={el.id}
              isSelect={el === selectedAddress}
              onSelect={() => setSelectedAddress(el)}
            />
          ))}
        </S.AddressItemsWrapper>
        <Spacer width="100%" height="10px" />
        <S.ButtonWrapper className="flex-row">
          <S.CancelButton className="bold14" onClick={onClose}>
            취소
          </S.CancelButton>
          <Spacer width="8px" height="100%" />
          <S.SubmitButton
            className="bold14"
            disabled={selectedAddress === data}
            onClick={onSubmit}
          >
            수정하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}

interface IAddressItemProps {
  data: IDeliveryAddress;
  isSelect: boolean;
  onSelect: () => void;
}

function AddressItem({ data, isSelect, onSelect }: IAddressItemProps) {
  return (
    <S.AddressItemWrapper isSelect={isSelect} onClick={onSelect}>
      <div className="flex-row-align-center">
        <p className="bold16">{data.name}</p>
        {data.isDefault && (
          <>
            <Spacer width="10px" height="100%" />
            <S.BasicAddressLabel className="bold10 flex-center">
              기본 배송지
            </S.BasicAddressLabel>
          </>
        )}
      </div>
      <Spacer width="100%" height="8px" />
      <p className="medium16">{`${data.address}, ${data.detailAddress}`}</p>
      <Spacer width="100%" height="8px" />
      <S.AddressUserInfo className="regular14">
        {`${data.receiver} · ${getPhoneNumber(data.phone1)}`}
      </S.AddressUserInfo>
    </S.AddressItemWrapper>
  );
}
