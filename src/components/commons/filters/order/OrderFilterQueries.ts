import { IFilterGroup } from "../OrderFilter.types";

export const QUOTATION: IFilterGroup = {
  title: "견적서 작성",
  key: "quoation",
  filters: [
    { name: "작성 필요", value: "false" },
    { name: "작성 완료", value: "true" },
  ],
};

export const CUSTOMER: IFilterGroup = {
  title: "고객 유형",
  key: "customer",
  filters: [
    { name: "신규 고객", value: "true" },
    { name: "기존 고객", value: "false" },
  ],
};

export const ORDER_TYPE: IFilterGroup = {
  title: "거래 유형",
  key: "orderType",
  filters: [
    { name: "일반 거래", value: "false" },
    { name: "긴급 거래", value: "true" },
  ],
};

export const DATE_FILTER: IFilterGroup = {
  title: "거래 날짜",
  key: "dateFilter",
  filters: [
    { name: "거래 생성일 기준", value: "create" },
    { name: "납기일 기준", value: "delivery" },
  ],
};
