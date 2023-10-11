import { IFilterGroup } from "./OrderFilter.types";

export const STAGE: IFilterGroup = {
  title: "거래 단계",
  filters: [
    { name: "견적 대기", value: "new", percentage: "0%" },
    { name: "견적 승인", value: "quote-approval", percentage: "25%" },
    { name: "제작중", value: "in-production", percentage: "50%" },
    { name: "배송중", value: "shipping", percentage: "75%" },
    { name: "거래 완료", value: "complete", percentage: "100%" },
  ],
};

export const MANUFACTURING: IFilterGroup = {
  title: "작업 범위",
  filters: [
    { name: "레이저 가공", value: "laser-cutting" },
    { name: "절곡", value: "bending" },
    { name: "용접", value: "welding-fabrication" },
  ],
};

export const QUOTATION: IFilterGroup = {
  title: "견적서 작성",
  filters: [
    { name: "작성 필요", value: "require" },
    { name: "작성 완료", value: "complete" },
  ],
};

export const CUSTOMER: IFilterGroup = {
  title: "고객 유형",
  filters: [
    { name: "신규 고객", value: "existing" },
    { name: "기존 고객", value: "new" },
  ],
};

export const ORDER_TYPE: IFilterGroup = {
  title: "거래 유형",
  filters: [
    { name: "일반 거래", value: "general" },
    { name: "긴급 거래", value: "urgent" },
  ],
};

export const getManufacturings = (value: string): string => {
  const values = value.split(",");
  const manufacturings: string[] = [];

  values.forEach((v) => {
    const filter = MANUFACTURING.filters.find((f) => f.value === v);
    if (filter) {
      manufacturings.push(filter.name);
    }
  });

  return manufacturings.join(", ");
};
