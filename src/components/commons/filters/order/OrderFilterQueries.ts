import { IFilterGroup } from "./OrderFilterTypes";

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
