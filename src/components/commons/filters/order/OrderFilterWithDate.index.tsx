import OrderDateInput from "../../inputs/order/OrderDateInput.index";
import * as S from "../OrderFilter.styles";
import { DATE_FILTER } from "./OrderFilterQueries";
import { IOrderFilterWithDateProps } from "../OrderFilter.types";
import RedoIcon from "../../icons/RedoIcon.index";
import Spacer from "../../spacer/Spacer.index";

export default function OrderFilterWithDate(props: IOrderFilterWithDateProps) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper className="flex-row-between">
        <p className="bold16">검색 필터</p>
        <a className="flex-row-center">
          <RedoIcon size={16} />
          <Spacer width="5px" height="100%" />
          <p className="medium16" onClick={props.onResetFilter}>
            필터 초기화
          </p>
        </a>
      </S.HeaderWrapper>
      {props.filterGroups.map((el) => (
        <S.FilterWrapper className="flex-row" key={el.key}>
          <S.FilterLabel className="medium16">{el.title}</S.FilterLabel>
          {el.filters.map((filter) => (
            <S.Filter
              className="medium16"
              isSelect={
                props.filterMap.get(el.key)?.includes(filter.value) ?? false
              }
              key={filter.value}
              onClick={() => props.onFilterClick(el.key, filter.value)}
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
                isSelect={props.dateFilter === el}
                onClick={() => props.onDateFilter(el)}
                key={el.value}
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
