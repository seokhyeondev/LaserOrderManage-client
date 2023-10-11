import * as S from "./OrderList.styles";
import Image from "next/image";

export default function NewFactoryOrderList() {
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
          <S.QuotationLabel className="medium16">
            견적서 작성 완료
          </S.QuotationLabel>
          <S.HeaderWrapper className="flex-row-between-center">
            <div className="flex-row-bottom">
              <S.OrderName className="bold20">
                실리콘 부품 제작 프로젝트
              </S.OrderName>
              <S.OrderUrgent>긴급</S.OrderUrgent>
              <S.OrderRequest>요청사항</S.OrderRequest>
            </div>
            <p className="bold24">10,000,000원</p>
          </S.HeaderWrapper>
          <S.InfoContentWrapper>
            <p className="regular16">김** · 네스로지텍(주) · 신규 고객</p>
          </S.InfoContentWrapper>
          <S.InfoContentWrapper className="flex-row">
            <S.InfoLabel className="regular16">작업 범위</S.InfoLabel>
            <p className="regular16">레이저 가공, 절곡</p>
          </S.InfoContentWrapper>
          <div className="flex-row">
            <S.InfoContentWrapper className="flex-row">
              <S.InfoLabel className="regular16">거래 생성일</S.InfoLabel>
              <p className="regular16">2023.09.02</p>
            </S.InfoContentWrapper>
            <S.InfoContentWrapper className="flex-row">
              <S.InfoLabel className="regular16">납기일</S.InfoLabel>
              <p className="regular16">2023.09.29</p>
            </S.InfoContentWrapper>
          </div>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
}
