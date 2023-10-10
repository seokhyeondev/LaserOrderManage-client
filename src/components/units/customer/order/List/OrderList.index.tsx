import OrderProgressbar from "@/src/components/commons/progressbar/order/OrderProgressbar.index";
import * as S from "./OrderList.styles";
import Image from "next/image";
import { IOrderListProps } from "./OrderList.types";
import { STAGE } from "@/src/components/commons/filters/order/OrderFilterQueries";
import { getDate, getCost } from "@/src/commons/libraries/utils";

export default function CustomerOrderList(props: IOrderListProps) {
  return (
    <>
      <S.Wrapper className="flex-row">
        <S.ImageWrapper>
          <Image
            width={200}
            height={200}
            src="/images/netflix.webp"
            alt="리스트 이미지"
          />
        </S.ImageWrapper>
        <S.InfoWrapper className="flex-column-between">
          <div>
            <S.StageLabel className="medium16">
              {
                STAGE.filters.find(
                  (filter) => filter.value === props.data.stage,
                )?.name
              }
            </S.StageLabel>
            <S.HeaderWrapper className="flex-row-between-center">
              <div className="flex-row-bottom">
                <S.OrderName className="bold20">{props.data.name}</S.OrderName>
                {typeof props.data.request !== "undefined" && (
                  <S.OrderRequest
                    className="regular14"
                    onClick={() =>
                      props.onOpenModal(props.data.name, props.data.request!!)
                    }
                  >
                    요청사항
                  </S.OrderRequest>
                )}
              </div>
              {typeof props.data.cost !== "undefined" && (
                <p className="bold24">{getCost(props.data.cost)}</p>
              )}
            </S.HeaderWrapper>
            <S.ManufacturingWrapper className="flex-row">
              <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
              <p className="regular16">레이저 가공, 절곡</p>
            </S.ManufacturingWrapper>
            <div className="flex-row">
              <S.DateWrapper className="flex-row">
                <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
                <p className="regular16">{getDate(props.data.createdAt)}</p>
              </S.DateWrapper>
              {typeof props.data.deliveryAt !== "undefined" && (
                <S.DateWrapper className="flex-row">
                  <S.InfoLabel className="regular16">납기일</S.InfoLabel>
                  <p className="regular16">{getDate(props.data.deliveryAt)}</p>
                </S.DateWrapper>
              )}
            </div>
          </div>
          <OrderProgressbar stage={props.data.stage} />
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
}
