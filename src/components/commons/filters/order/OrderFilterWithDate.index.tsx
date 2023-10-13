import OrderDateInput from "../../inputs/order/OrderDateInput.index";
import * as S from "./OrderFilter.styles";
import Image from "next/image";

export default function OrderFilterWithDate() {
  return (
    <S.Wrapper>
      <S.HeaderWrapper className="flex-row-between">
        <p className="bold16">검색 필터</p>
        <a className="flex-row-center">
          <S.RedoIconWrapper>
            <Image
              width={16}
              height={16}
              src="/images/redo.svg"
              alt="초기화 아이콘"
            />
          </S.RedoIconWrapper>
          <p className="medium16" onClick={() => {}}>
            필터 초기화
          </p>
        </a>
      </S.HeaderWrapper>
      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">거래 유형</S.FilterLabel>
        <S.Filter className="medium16" isSelect={true}>
          일반 거래
        </S.Filter>
        <S.Filter className="medium16" isSelect={true}>
          긴급 거래
        </S.Filter>
      </S.FilterWrapper>
      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">거래 날짜</S.FilterLabel>
        <div>
          <div className="flex-row">
            <S.FilterSmall className="medium12" isSelect={true}>
              거래 생성일 기준
            </S.FilterSmall>
            <S.FilterSmall className="medium12" isSelect={true}>
              납기일 기준
            </S.FilterSmall>
          </div>
          <S.DateInputWrapper className="flex-row-center">
            <OrderDateInput />
            <S.DateInputDivier className="medium20">-</S.DateInputDivier>
            <OrderDateInput />
          </S.DateInputWrapper>
        </div>
      </S.FilterWrapper>
    </S.Wrapper>
  );
}
