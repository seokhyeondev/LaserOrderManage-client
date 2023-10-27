import { IFilterGroup } from "./OrderFilter.types";

export const STAGE: IFilterGroup = {
  title: "거래 단계",
  key: "stage",
  filters: [
    { name: "견적 대기", value: "new", percentage: "0%" },
    { name: "견적 승인", value: "quote-approval", percentage: "25%" },
    { name: "제작 중", value: "in-production", percentage: "50%" },
    { name: "배송 중", value: "shipping", percentage: "75%" },
    { name: "거래 완료", value: "completed", percentage: "100%" },
  ],
};

export const MANUFACTURING: IFilterGroup = {
  title: "작업 범위",
  key: "manufacturing",
  filters: [
    { name: "레이저 가공", value: "laser-cutting" },
    { name: "절곡", value: "bending" },
    { name: "용접", value: "welding-fabrication" },
  ],
};

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
    { name: "납기일 기준", value: "end" },
  ],
};
