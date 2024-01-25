import type { DateValue } from "@/src/lib/hooks/useDate";
import { OrderTab } from "../tabs/order/OrderTab.types";

export interface IFilterProps {
  isSelect: boolean;
}

export interface IOrderFilterProps {
  onResetFilter: () => void;
}

export interface IFOrderFilterProps extends IOrderFilterProps {
  tab: OrderTab;
  orderType: boolean | null;
  onOrderType: (type: boolean) => void;
}

export type OrderQuotationType = "작성 필요" | "작성 완료";

export type CustomerType = "신규 고객" | "기존 고객";

export type OrderType = "일반 거래" | "긴급 거래";

export interface IOrderFilterWithDateProps extends IOrderFilterProps {
  dateFilter: IFilterItem | undefined;
  startDate: string;
  endDate: string;
  onDateFilter: (filterItem: IFilterItem) => void;
  onStartDate: (date: DateValue) => void;
  onEndDate: (date: DateValue) => void;
}

export interface IFilterItem {
  name: string;
  value: string;
  percentage?: string;
}

export interface IFilterGroup {
  title: string;
  key: string;
  filters: IFilterItem[];
}
