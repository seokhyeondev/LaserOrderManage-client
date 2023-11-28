import Spacer from "../../spacer/Spacer.index";
import Modal from "../Modal.index";
import * as S from "./LoadOrderModal.styles";
import Image from "next/image";
import { useState } from "react";
import { IModalProps } from "../Modal.index";
import LoadOrderSearchbar from "../../searchbars/create/LoadOrderSearchbar";
import { useSearchbar } from "@/src/lib/hooks/useSearchBar";
import { IOrderHistoryResponse } from "@/src/lib/apis/order/create/OrderCreate.types";
import { getDate } from "@/src/lib/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { OrderCreateApi } from "@/src/lib/apis/order/create/OrderCreateApi";

interface ILoadOrderModalProps extends IModalProps {
  callback: (response: IOrderHistoryResponse) => void;
}

export default function LoadOrderModal(props: ILoadOrderModalProps) {
  const searchBarArgs = useSearchbar(() => refetch());
  const [selectedId, setSelectedId] = useState<number>();

  const { data, refetch } = useQuery({
    queryKey: ["orderHistoryList"],
    queryFn: () =>
      OrderCreateApi.GET_ORDER_HISTORY_LIST(1, 5, searchBarArgs.keyword),
  });

  const onLoad = () => {
    props.callback({
      id: 0,
      name: "실리콘 부품 제작 프로젝트",
      manufacturingList: [],
      postProcessingList: null,
      drawingList: [],
      request: null,
      deliveryAddress: {
        id: 0,
        name: "집",
        zipCode: "1234",
        address: "주소",
        detailAddress: "상세 주소",
        receiver: "나",
        phone1: "010",
        phone2: null,
        isDefault: true,
      },
    });
    props.onClose();
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <S.ModalWrapper className="flex-column">
        <S.ModalTitle className="bold28">거래 불러오기</S.ModalTitle>
        <Spacer width="100%" height="32px" />
        <LoadOrderSearchbar
          placeholder="거래 이름으로 검색하기"
          onChangeSearchBar={searchBarArgs.onChangeSearchBar}
          onActiveEnter={searchBarArgs.onActiveEnter}
          onSearchKeyword={searchBarArgs.onSearchKeyword}
        />
        <S.ModalContentWrapper>
          {data &&
            data.contents.map((el) => (
              <S.LoadOrderItem
                className="flex-row-align-center"
                isSelect={el.id === selectedId}
                onClick={() => setSelectedId(el.id)}
                key={el.id}
              >
                <Image
                  width={100}
                  height={100}
                  src={el.imgUrl}
                  alt=""
                  style={S.LoadOrderItemImage}
                />
                <div>
                  <S.LoadOrderItemTitle
                    className="medium24"
                    isSelect={el.id === selectedId}
                  >
                    {el.name}
                  </S.LoadOrderItemTitle>
                  <S.LoadOrderItemDate className="medium16">
                    {`거래 일자: ${getDate(el.createdAt)}`}
                  </S.LoadOrderItemDate>
                </div>
              </S.LoadOrderItem>
            ))}
        </S.ModalContentWrapper>
        <div className="flex-row">
          <S.CancelButton className="bold20" onClick={props.onClose}>
            취소
          </S.CancelButton>
          <Spacer width="15px" height="100%" />
          <S.LoadButton
            className="bold20"
            isActive={selectedId !== undefined}
            onClick={onLoad}
          >
            불러오기
          </S.LoadButton>
        </div>
      </S.ModalWrapper>
    </Modal>
  );
}
