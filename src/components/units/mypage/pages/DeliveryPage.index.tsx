import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./MyPagePages.styles";
import DeliveryItem from "./items/DeliveryItem.index";
import { useState } from "react";
import AddressModal from "@/src/components/commons/modal/address/AddressModal.index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { useToastify } from "@/src/lib/hooks/useToastify";

export default function DeliveryPage() {
  const [showModal, setShowModal] = useState(false);
  const [targetData, setTargetData] = useState<IDeliveryAddress | undefined>(
    undefined,
  );
  const { setToast } = useToastify();
  const { data, refetch } = useQuery({
    queryKey: ["getDeliveryAddress"],
    queryFn: () => CustomerApi.GET_DELIVERY_ADDRESS(),
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: CustomerApi.DELETE_DELIVERY_ADDRESS,
    onSuccess: () => {
      refetch();
      setToast({ comment: "배송지를 삭제했어요" });
    },
    onError: () => {
      setToast({ comment: "배송지 삭제에 실패했어요" });
    },
  });

  const onDelete = (data: IDeliveryAddress) => {
    if (data.isDefault) {
      setToast({ comment: "기본 배송지는 삭제할 수 없어요" });
      return;
    }
    deleteMutate(data.id);
  };

  const showModalWithData = (data: IDeliveryAddress) => {
    setTargetData(data);
    setShowModal(true);
  };

  const showModalWithoutData = () => {
    setTargetData(undefined);
    setShowModal(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.Title className="bold24">배송지 관리</S.Title>
        <S.BodyWrapper>
          <div>
            {data?.contents.map((el) => (
              <DeliveryItem
                key={el.id}
                data={el}
                onEdit={() => showModalWithData(el)}
                onDelete={() => onDelete(el)}
              />
            ))}
          </div>
          <Spacer width="100%" height="16px" />
          <S.AddWrapper
            className="regular14 flex-center"
            onClick={showModalWithoutData}
          >
            + 배송지 추가하기
          </S.AddWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
      <AddressModal
        isOpen={showModal}
        initData={targetData}
        onClose={() => setShowModal(false)}
        refetch={() => refetch()}
      />
    </>
  );
}
