import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { useEffect } from "react";
import AddressItem from "./items/AddressItem.index";
import AddressModal from "@/src/components/commons/modal/address/AddressModal.index";
import { useState } from "react";
import { ICreateOrderPageProps } from "../CreateOrder.types";
import { useRecoilState } from "recoil";
import { createOrderState, initialState } from "@/src/store/createOrder";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { OrderCreateApi } from "@/src/lib/apis/order/create/OrderCreateApi";
import { AxiosError } from "axios";
import { IHttpStatus } from "@/src/lib/apis/axios";
import { IOrderCreateRequest } from "@/src/lib/apis/order/create/OrderCreate.types";
import { useRouter } from "next/router";
import { useToastify } from "@/src/lib/hooks/useToastify";

export default function DeliveryInfo(props: ICreateOrderPageProps) {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>();
  const [orderState, setOrderState] = useRecoilState(createOrderState);
  const { data, refetch } = useQuery({
    queryKey: ["deliveryAddress"],
    queryFn: () => CustomerApi.GET_DELIVERY_ADDRESS(),
  });
  const { setToast } = useToastify();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: OrderCreateApi.ORDER_CREATE,
    onSuccess: () => {
      setToast({ comment: "새 거래를 생성했어요" });
      router.replace("/customer/order");
      setOrderState(initialState);
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        const status = error.response.data as IHttpStatus;
        if (status.errorCode === "-009") {
          //지원하지 않는 파일 형식
        }
        if (status.errorCode === "-010") {
          //지원하지 않는 재료
        }
      }
    },
  });

  useEffect(() => {
    setSelectedAddressId(orderState.deliveryAddressId);
  }, []);

  const onBefore = () => {
    setOrderState({
      ...orderState,
      deliveryAddressId: selectedAddressId,
    });
    if (props.onBefore) props.onBefore();
  };

  const onSubmit = () => {
    const payload: IOrderCreateRequest = {
      ...orderState,
      deliveryAddressId: selectedAddressId!!,
    };
    mutate(payload);
  };

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
            {data?.contents.map((el) => (
              <AddressItem
                key={el.id}
                data={el}
                selectedId={selectedAddressId}
                onSelect={(id: number) => setSelectedAddressId(id)}
              />
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
              onClick={onSubmit}
            >
              견적 요청하기
            </S.NextButton>
          </div>
        </S.FormButtonWrapper>
      </S.FormWrapper>
      {addressModalOpen && (
        <AddressModal
          isOpen={addressModalOpen}
          onClose={() => setAddressModalOpen(false)}
          refetch={refetch}
        />
      )}
    </>
  );
}
