import Modal from "../Modal.index";
import { IDeliveryModalProps } from "./DetailModal.types";
import * as S from "./DetailModal.styles";
import Spacer from "../../spacer/Spacer.index";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { getPhoneNumber } from "@/src/lib/utils/utils";
import { useState } from "react";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";
import { IDetailEditAddressRequest } from "@/src/lib/apis/order/detail/OrderDetail.types";

export default function AddressModal({
  isOpen,
  data,
  orderId,
  onClose,
  callback,
}: IDeliveryModalProps) {
  const [selectedAddress, setSelectedAddress] =
    useState<IDeliveryAddress>(data);
  const { setToast } = useToastify();

  const { data: addressList } = useQuery({
    queryKey: ["getDeliveryAddress"],
    queryFn: () => CustomerApi.GET_DELIVERY_ADDRESS(),
    enabled: isOpen,
  });

  const { mutate } = useMutation({
    mutationFn: OrderDetailApi.PUT_ORDER_DELIVERY_ADDRESS,
    onSuccess: () => {
      callback(selectedAddress);
      setToast({ comment: "배송지를 변경했어요" });
      onClose();
    },
    onError: () => {
      setToast({ comment: "배송지를 변경할 수 없어요" });
    },
  });

  const onSubmit = () => {
    const payload: IDetailEditAddressRequest = {
      deliveryAddressId: selectedAddress.id,
    };
    mutate({ id: orderId, payload: payload });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Wrapper className="flex-column-start" width={600} height={600}>
        <S.Title className="bold20">배송지 수정하기</S.Title>
        <S.AddressItemsWrapper>
          {addressList?.contents.map((el) => (
            <AddressItem
              data={el}
              key={el.id}
              isSelect={el.id === selectedAddress.id}
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
            disabled={selectedAddress.id === data.id}
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
