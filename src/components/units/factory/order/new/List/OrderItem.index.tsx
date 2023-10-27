import * as S from "./OrderList.styles";
import Image from "next/image";
import { IOrderItemProps } from "./OrderList.types";
import { getCost, getCustomerInfo, getDate } from "@/src/lib/utils/utils";

export default function FactoryNewOrderItem(props: IOrderItemProps) {
  return (
    <S.Wrapper className="flex-row">
      <Image
        width={200}
        height={200}
        src={props.data.imgUrl}
        alt="리스트 이미지"
        style={S.ImageWrapper}
      />
      <S.InfoWrapper>
        <S.QuotationLabel
          className="medium16"
          isComplete={props.data.hasQuotation}
        >
          {props.data.hasQuotation ? "견적서 작성 완료" : "견적서 작성 필요"}
        </S.QuotationLabel>
        <S.HeaderWrapper className="flex-row-between-center">
          <div className="flex-row-bottom">
            <S.OrderName className="bold20">{props.data.name}</S.OrderName>
            {props.data.isUrgent ? (
              <S.OrderUrgent className="bold14">긴급</S.OrderUrgent>
            ) : null}
            {props.data.request && (
              <S.OrderRequest
                className="regular14"
                onClick={() =>
                  props.onOpenModal({
                    name: props.data.name,
                    request: props.data.request!,
                  })
                }
              >
                요청사항
              </S.OrderRequest>
            )}
          </div>
          {props.data.cost && (
            <p className="bold24">{getCost(props.data.cost)}</p>
          )}
        </S.HeaderWrapper>
        <S.InfoContentWrapper>
          <p className="regular16">
            {getCustomerInfo(
              props.data.customer,
              props.data.company,
              props.data.isNewCustomer,
            )}
          </p>
        </S.InfoContentWrapper>
        <S.InfoContentWrapper className="flex-row">
          <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
          <p className="regular16">{props.data.manufacturing.join(", ")}</p>
        </S.InfoContentWrapper>
        <div className="flex-row">
          <S.InfoContentWrapper className="flex-row">
            <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
            <p className="regular16">{getDate(props.data.createdAt)}</p>
          </S.InfoContentWrapper>
          {props.data.deliveryAt && (
            <S.InfoContentWrapper className="flex-row">
              <S.InfoLabel className="regular16">납기일</S.InfoLabel>
              <p className="regular16">{getDate(props.data.deliveryAt)}</p>
            </S.InfoContentWrapper>
          )}
        </div>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
