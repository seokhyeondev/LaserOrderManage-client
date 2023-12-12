export type ICustomerOrderResponse = {
  contents: ICustomerOrder[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type OrderStatus =
  | "견적 대기"
  | "견적 승인"
  | "제작 중"
  | "배송 중"
  | "거래 완료";

export type Manufacturing = "laser-cutting" | "bending" | "welding-fabrication";

export type PostProcessing = "painting" | "plating";

export type ICustomerOrder = {
  id: number;
  name: string;
  imgUrl: string;
  stage: OrderStatus;
  isUrgent: boolean;
  manufacturingList: Manufacturing[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
};

export type IFactoryNewOrderResponse = {
  contents: IFactoryNewOrder[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type IFactoryNewOrder = {
  id: number;
  name: string;
  customer: string;
  company: string | null;
  isNewCustomer: boolean | undefined;
  hasQuotation: boolean;
  imgUrl: string;
  isUrgent: boolean;
  manufacturingList: Manufacturing[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
};

export type IFactoryOrderResponse = {
  contents: IFactoryOrder[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type IFactoryOrder = {
  id: number;
  name: string;
  customer: string;
  company: string | null;
  imgUrl: string;
  stage: string;
  isUrgent: string;
  manufacturingList: Manufacturing[];
  createdAt: any;
  deliveryAt: any | null;
  cost: number | null;
  request: string | null;
};
