import OrderProgressbar from "@/src/components/commons/progressbar/order/OrderProgressbar.index";
import * as S from "./OrderList.styles";
import Image from "next/image";
import { IOrderItemProps } from "./OrderList.types";
import {
  getCost,
  getCustomerInfo,
  getDate,
  getManufacurings,
} from "@/src/lib/utils/utils";
import { useRouter } from "next/router";
import { useRef, MouseEvent } from "react";
import { AppPages } from "@/src/lib/constants/appPages";
import { BLUR_URL_1_1 } from "@/src/lib/constants/constant";

export default function FactoryOrderItem({
  data,
  onOpenModal,
}: IOrderItemProps) {
  const router = useRouter();
  const requestRef = useRef<HTMLAnchorElement>(null);

  const onItem = (id: number, event: MouseEvent<HTMLElement>) => {
    if (requestRef.current && requestRef.current.contains(event.target as Node))
      return;
    router.push(`${AppPages.ORDER_DETAIL}/${id}`);
  };
  return (
    <S.Wrapper className="flex-row" onClick={(e) => onItem(data.id, e)}>
      <Image
        width={200}
        height={200}
        src={data.imgUrl}
        alt="리스트 이미지"
        style={S.ImageWrapper}
        placeholder="blur"
        blurDataURL={BLUR_URL_1_1}
      />
      <S.InfoWrapper className="flex-column-between">
        <div>
          <S.StageLabel className="medium16">{data.stage}</S.StageLabel>
          <S.HeaderWrapper className="flex-row-between-center">
            <div className="flex-row-bottom">
              <S.OrderName className="bold20">{data.name}</S.OrderName>
              {data.isUrgent ? (
                <S.OrderUrgent className="bold14">긴급</S.OrderUrgent>
              ) : null}
              {data.request && (
                <S.OrderRequest
                  className="regular14"
                  ref={requestRef}
                  onClick={() =>
                    onOpenModal({
                      name: data.name,
                      request: data.request!,
                    })
                  }
                >
                  요청사항
                </S.OrderRequest>
              )}
            </div>
            {data.cost && <p className="bold24">{getCost(data.cost)}</p>}
          </S.HeaderWrapper>
          <S.InfoContentWrapper>
            <p className="regular16">
              {getCustomerInfo(data.customer, data.company)}
            </p>
          </S.InfoContentWrapper>
          <S.InfoContentWrapper className="flex-row">
            <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
            <p className="regular16">
              {getManufacurings(data.manufacturingList)}
            </p>
          </S.InfoContentWrapper>
          <div className="flex-row">
            <S.InfoContentWrapper className="flex-row">
              <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
              <p className="regular16">{getDate(data.createdAt)}</p>
            </S.InfoContentWrapper>
            {data.deliveryAt && (
              <S.InfoContentWrapper className="flex-row">
                <S.InfoLabel className="regular16">납기일</S.InfoLabel>
                <p className="regular16">{getDate(data.deliveryAt)}</p>
              </S.InfoContentWrapper>
            )}
          </div>
        </div>
        <OrderProgressbar stage={data.stage} />
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
