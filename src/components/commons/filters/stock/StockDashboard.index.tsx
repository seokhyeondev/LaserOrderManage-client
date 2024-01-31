import * as S from "../OrderFilter.styles";
import RedoIcon from "../../icons/RedoIcon.index";
import Spacer from "../../spacer/Spacer.index";
import { UNITS } from "./StockFilter.queries";
import { IOrderFilterProps } from "../OrderFilter.types";
import { Manufacturing, OrderStage } from "@/src/lib/apis/order/Order.types";
import { getUnits } from "@/src/lib/utils/utils";

interface IStockFilterProps extends IOrderFilterProps {
  stageFilters: OrderStage[];
  manuFilters: Manufacturing[];
  onStageFilter: (stage: OrderStage) => void;
  onManufacturingFilter: (manufacturing: Manufacturing) => void;
}

export default function StockDashboard({
  stageFilters,
  manuFilters,
  onStageFilter,
  onManufacturingFilter,
  onResetFilter,
}: IStockFilterProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <S.Wrapper>
        <S.HeaderWrapper className="flex-row-between">
          <p className="bold16">평균 단가</p>
        </S.HeaderWrapper>
        <S.FilterWrapper className="flex-row">
          <S.FilterLabel className="medium16">구매 단가</S.FilterLabel>
          <S.Filter className="medium16">1,000 원 / 1TON</S.Filter>
        </S.FilterWrapper>
        <S.FilterWrapper className="flex-row">
          <S.FilterLabel className="medium16">판매 단가</S.FilterLabel>
          <S.Filter className="medium16">1,000 원 / 1TON</S.Filter>
        </S.FilterWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.HeaderWrapper className="flex-row-between">
          <p className="bold16">TOTAL 재고</p>
        </S.HeaderWrapper>
        <S.FilterWrapper className="flex-row">
          <S.FilterLabel className="medium16">구매 단가</S.FilterLabel>
          <S.Filter className="medium16">1,000 원 / 1TON</S.Filter>
        </S.FilterWrapper>
        <S.FilterWrapper className="flex-row">
          <S.FilterLabel className="medium16">판매 단가</S.FilterLabel>
          <S.Filter className="medium16">1,000 원 / 1TON</S.Filter>
        </S.FilterWrapper>
      </S.Wrapper>
    </div>
  );
}
