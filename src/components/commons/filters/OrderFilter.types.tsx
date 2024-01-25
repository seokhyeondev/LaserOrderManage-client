import type { DateValue } from "@/src/lib/hooks/useDate";

export interface IFilterProps {
  isSelect: boolean;
}

export interface IOrderFilterProps {
  onResetFilter: () => void;
}

export interface IFOrderFilterProps extends IOrderFilterProps {
  orderType: boolean | null;
  onOrderType: (type: boolean) => void;
}

export type OrderQuotationType = "작성 필요" | "작성 완료";

export type CustomerType = "신규 고객" | "기존 고객";

export type OrderType = "일반 거래" | "긴급 거래";

export type OrderDateType = "거래 생성일 기준" | "납기일 기준";
