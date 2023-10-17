import OrderDateInput from "../../inputs/order/OrderDateInput.index";
import * as S from "./OrderFilter.styles";
import Image from "next/image";
import { DATE_FILTER } from "./OrderFilterQueries";
import { IOrderFilterWithDateProps } from "./OrderFilter.types";

export default function OrderFilterWithDate(props: IOrderFilterWithDateProps) {
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
          <p className="medium16" onClick={props.onResetFilter}>
            필터 초기화
          </p>
        </a>
      </S.HeaderWrapper>
      {props.filterGroups.map((el) => (
        <S.FilterWrapper className="flex-row">
          <S.FilterLabel className="medium16">{el.title}</S.FilterLabel>
          {el.filters.map((filter) => (
            <S.Filter
              className="medium16"
              isSelect={
                props.filterMap.get(filter.value)?.includes(filter.value) ??
                false
              }
              key={filter.value}
              onClick={() => props.onFilterClick(filter.value)}
            >
              {filter.name}
            </S.Filter>
          ))}
        </S.FilterWrapper>
      ))}

      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">{DATE_FILTER.title}</S.FilterLabel>
        <div>
          <div className="flex-row">
            {DATE_FILTER.filters.map((el) => (
              <S.FilterSmall
                className="medium14"
                isSelect={props.selectedDateFilter === el}
                onClick={() => props.onDateFilter(el)}
              >
                {el.name}
              </S.FilterSmall>
            ))}
          </div>
          <S.DateInputWrapper className="flex-row-center">
            <OrderDateInput
              date={props.startDate}
              setDate={props.onStartDate}
            />
            <S.DateInputDivier className="medium20">-</S.DateInputDivier>
            <OrderDateInput date={props.endDate} setDate={props.onEndDate} />
          </S.DateInputWrapper>
        </div>
      </S.FilterWrapper>
    </S.Wrapper>
  );
}
