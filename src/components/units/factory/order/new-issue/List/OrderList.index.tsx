import * as S from "./OrderList.styles";
import Image from "next/image";
import { IOrderListProps } from "./OrderList.types";
import {
  getManufacturings,
  getQuotationName,
} from "@/src/components/commons/filters/order/OrderFilterQueries";
import {
  getCost,
  getCustomerInfo,
  getDate,
} from "@/src/commons/libraries/utils";

export default function NewFactoryOrderList(props: IOrderListProps) {
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
        <S.InfoWrapper>
          <S.QuotationLabel
            className="medium16"
            isComplete={props.data.quotation === "complete"}
          >
            {getQuotationName(props.data.quotation)}
          </S.QuotationLabel>
          <S.HeaderWrapper className="flex-row-between-center">
            <div className="flex-row-bottom">
              <S.OrderName className="bold20">{props.data.name}</S.OrderName>
              {props.data.isUrgent ? (
                <S.OrderUrgent className="bold14">긴급</S.OrderUrgent>
              ) : null}
              {typeof props.data.request !== "undefined" && (
                <S.OrderRequest className="regular14">요청사항</S.OrderRequest>
              )}
            </div>
            {typeof props.data.cost !== "undefined" && (
              <p className="bold24">{getCost(props.data.cost)}</p>
            )}
          </S.HeaderWrapper>
          <S.InfoContentWrapper>
            <p className="regular16">
              {getCustomerInfo(
                props.data.customer,
                props.data.company,
                props.data.customerType,
              )}
            </p>
          </S.InfoContentWrapper>
          <S.InfoContentWrapper className="flex-row">
            <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
            <p className="regular16">
              {getManufacturings(props.data.manufacturing)}
            </p>
          </S.InfoContentWrapper>
          <div className="flex-row">
            <S.InfoContentWrapper className="flex-row">
              <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
              <p className="regular16">{getDate(props.data.createdAt)}</p>
            </S.InfoContentWrapper>
            {typeof props.data.deliveryAt !== "undefined" && (
              <S.InfoContentWrapper className="flex-row">
                <S.InfoLabel className="regular16">납기일</S.InfoLabel>
                <p className="regular16">{getDate(props.data.deliveryAt)}</p>
              </S.InfoContentWrapper>
            )}
          </div>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
}
