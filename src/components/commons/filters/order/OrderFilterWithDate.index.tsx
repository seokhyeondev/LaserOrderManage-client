import OrderDateInput from "../../inputs/order/OrderDateInput.index";
import * as S from "./OrderFilter.styles";
import Image from "next/image";
import { DATE_FILTER, ORDER_TYPE } from "./OrderFilterQueries";

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
        <S.FilterLabel className="medium16">{ORDER_TYPE.title}</S.FilterLabel>
        {ORDER_TYPE.filters.map((el) => (
          <S.Filter className="medium16" isSelect={true} key={el.value}>
            {el.name}
          </S.Filter>
        ))}
      </S.FilterWrapper>
      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">{DATE_FILTER.title}</S.FilterLabel>
        <div>
          <div className="flex-row">
            {DATE_FILTER.filters.map((el) => (
              <S.FilterSmall className="medium12" isSelect={true}>
                {el.name}
              </S.FilterSmall>
            ))}
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
