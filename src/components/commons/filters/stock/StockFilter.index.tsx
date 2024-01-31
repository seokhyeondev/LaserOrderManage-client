import * as S from "../OrderFilter.styles";
import RedoIcon from "../../icons/RedoIcon.index";
import Spacer from "../../spacer/Spacer.index";
import { MANUFACTURINGS, ORDER_STAGES, UNITS } from "./StockFilter.queries";
import { IOrderFilterProps } from "../OrderFilter.types";
import { Manufacturing, OrderStage } from "@/src/lib/apis/order/Order.types";
import {
  getManufacuring,
  getOrderStatus,
  getUnits,
} from "@/src/lib/utils/utils";

interface IStockFilterProps extends IOrderFilterProps {
  stageFilters: OrderStage[];
  manuFilters: Manufacturing[];
  onStageFilter: (stage: OrderStage) => void;
  onManufacturingFilter: (manufacturing: Manufacturing) => void;
}

export default function StockFilter({
  stageFilters,
  manuFilters,
  onStageFilter,
  onManufacturingFilter,
  onResetFilter,
}: IStockFilterProps) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper className="flex-row-between">
        <p className="bold16">검색 필터</p>
        <a className="flex-row-center" onClick={() => onResetFilter()}>
          <RedoIcon size={16} />
          <Spacer width="5px" height="100%" />
          <p className="medium16">필터 초기화</p>
        </a>
      </S.HeaderWrapper>
      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">거래 단계</S.FilterLabel>
        <S.Filter className="medium16">
          <input type="date" />
        </S.Filter>
      </S.FilterWrapper>
      <S.FilterWrapper className="flex-row">
        <S.FilterLabel className="medium16">작업 범위</S.FilterLabel>
        {UNITS.map((el) => (
          <S.Filter
            className="medium16"
            key={el}
            isSelect={manuFilters?.includes(el)}
            onClick={() => onManufacturingFilter(el)}
          >
            {getUnits(el)}
          </S.Filter>
        ))}
      </S.FilterWrapper>
    </S.Wrapper>
  );
}
