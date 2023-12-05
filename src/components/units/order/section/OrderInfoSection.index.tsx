import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import { RefObject } from "react";
import { IDetailOrder } from "@/src/lib/apis/order/detail/OrderDetail.types";

interface IOrderInfoSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
  data: IDetailOrder;
}

export default function OrderInfoSection({
  sectionRef,
  data,
}: IOrderInfoSectionProps) {
  return (
    <S.Wrapper ref={sectionRef}>
      <p className="medium20">{data.stage}</p>
      <Spacer width="100%" height="10px" />
      <S.TitleWrapper>
        <S.Title className="bold28">{data.name}</S.Title>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="20px" />
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">작업 범위</S.Label>
          <S.Content className="regular16">
            {data.manufacturingList.join(", ")}
          </S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">후처리 서비스</S.Label>
          <S.Content className="regular16">
            {data.postProcessingList ? data.postProcessingList.join(", ") : "-"}
          </S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">생성 일자</S.Label>
          <S.Content className="regular16">{data.createdAt}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">요청 사항</S.Label>
          <S.Content className="regular16">
            {data.request ? data.request : "-"}
          </S.Content>
        </S.InfoWrapper>
        <Spacer width="100%" height="20px" />
      </S.Section>
    </S.Wrapper>
  );
}
