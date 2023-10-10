import OrderProgressbar from "@/src/components/commons/progressbar/order/OrderProgressbar.index";
import * as S from "./OrderList.styles";
import Image from "next/image";

export default function CustomerOrderList() {
  return (
    <S.Wrapper className="flex-row">
      <S.ImageWrapper>
        <Image
          width={200}
          height={200}
          src="/images/netflix.webp"
          alt="리스트 이미지"
          objectFit="cover"
        />
      </S.ImageWrapper>
      <S.InfoWrapper className="flex-column-between">
        <div>
          <S.StageLabel className="medium16">배송중</S.StageLabel>
          <S.HeaderWrapper className="flex-row-between-center">
            <div className="flex-row-bottom">
              <S.OrderName className="bold20">
                실리콘 부품 제작 프로젝트
              </S.OrderName>
              <S.OrderRequest className="regular14">요청사항</S.OrderRequest>
            </div>
            <p className="bold24">10,000,000원</p>
          </S.HeaderWrapper>
          <S.ManufacturingWrapper className="flex-row">
            <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
            <p className="regular16">레이저 가공, 절곡</p>
          </S.ManufacturingWrapper>
          <div className="flex-row">
            <S.DateWrapper className="flex-row">
              <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
              <p className="regular16">2023.09.02</p>
            </S.DateWrapper>
            <S.DateWrapper className="flex-row">
              <S.InfoLabel className="regular16">납기일</S.InfoLabel>
              <p className="regular16">2023.09.23</p>
            </S.DateWrapper>
          </div>
        </div>
        <OrderProgressbar stage={"shipping"} />
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
