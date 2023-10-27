import {
  CUSTOMER,
  ORDER_TYPE,
  QUOTATION,
} from "../../filters/order/OrderFilterQueries";
import { IOrderTab } from "./OrderTab.types";

export const NEW_ORDER_TAB: IOrderTab[] = [
  {
    name: "신규 발행",
    value: "new-issue",
    filterGroups: [QUOTATION, ORDER_TYPE, CUSTOMER],
  },
  { name: "재발행", value: "re-issue", filterGroups: [QUOTATION, ORDER_TYPE] },
];

export const ORDER_TAB: IOrderTab[] = [
  {
    name: "진행중",
    value: "false",
    filterGroups: [ORDER_TYPE],
  },
  {
    name: "완료",
    value: "true",
    filterGroups: [ORDER_TYPE],
  },
];
