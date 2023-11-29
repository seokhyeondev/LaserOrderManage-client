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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderCreateApi } from "@/src/lib/apis/order/create/OrderCreateApi";
import { useSimplePagination } from "@/src/lib/hooks/usePagination";
import HistoryPagination from "../../paginations/create/HistoryPagination.index";
import { useToastify } from "@/src/lib/hooks/useToastify";

interface ILoadOrderModalProps extends IModalProps {
  callback: (response: IOrderHistoryResponse) => void;
}

export default function LoadOrderModal(props: ILoadOrderModalProps) {
  const searchBarArgs = useSearchbar(() => refetch());
  const [selectedId, setSelectedId] = useState<number>();
  const queryClient = useQueryClient();
  const { setToast } = useToastify();

  const { data, refetch } = useQuery({
    queryKey: ["orderHistoryList"],
    queryFn: () =>
      OrderCreateApi.GET_ORDER_HISTORY_LIST(
        paginationArgs.activedPage,
        4,
        searchBarArgs.keyword,
      ),
    enabled: props.isOpen,
  });
  const paginationArgs = useSimplePagination({
    totalPage: data?.totalPages,
    refetch: () => refetch(),
  });

  const onLoad = () => {
    queryClient
      .fetchQuery({
        queryKey: ["orderHistory"],
        queryFn: () => OrderCreateApi.GET_ORDER_HISTORY(selectedId!!),
      })
      .then((response) => {
        props.callback(response);
        setToast({ comment: "이전 거래를 불러왔습니다" });
        props.onClose();
      })
      .catch((err) => {
        setToast({ comment: "다시 시도해주세요" });
      });
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
        <HistoryPagination totalPage={data?.totalPages} {...paginationArgs} />
        <Spacer width="100%" height="16px" />
        <div className="flex-row">
          <S.CancelButton className="bold20" onClick={props.onClose}>
            취소
          </S.CancelButton>
          <Spacer width="15px" height="100%" />
          <S.LoadButton
            className="bold20"
            isActive={selectedId !== undefined}
            disabled={selectedId === undefined}
            onClick={onLoad}
          >
            불러오기
          </S.LoadButton>
        </div>
      </S.ModalWrapper>
    </Modal>
  );
}
