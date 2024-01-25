import {
  CustomerType,
  OrderQuotationType,
  OrderType,
} from "../OrderFilter.types";

interface IOrderQuotationType {
  type: OrderQuotationType;
  key: boolean;
}

interface ICustomerType {
  type: CustomerType;
  key: boolean;
}

interface IOrderType {
  type: OrderType;
  key: boolean;
}

export const ORDER_QUOTAITON_TYPE: IOrderQuotationType[] = [
  { type: "작성 필요", key: false },
  { type: "작성 완료", key: true },
];

export const CUSTOMER_TYPE: ICustomerType[] = [
  { type: "신규 고객", key: true },
  { type: "기존 고객", key: false },
];

export const ORDER_TYPE: IOrderType[] = [
  { type: "일반 거래", key: false },
  { type: "긴급 거래", key: true },
];
