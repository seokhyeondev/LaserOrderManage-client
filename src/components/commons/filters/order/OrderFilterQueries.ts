export const STAGE = {
  title: "거래 단계",
  filters: [
    { name: "견적 대기", value: "new" },
    { name: "견적 승인", value: "quote-approval" },
    { name: "제작중", value: "in-production" },
    { name: "배송중", value: "shipping" },
    { name: "거래 완료", value: "complete" },
  ],
};

export const MANUFACTURING = {
  title: "작업 범위",
  filters: [
    { name: "레이저 가공", value: "laser-cutting" },
    { name: "절곡", value: "bending" },
    { name: "용접", value: "welding-fabrication" },
  ],
};
