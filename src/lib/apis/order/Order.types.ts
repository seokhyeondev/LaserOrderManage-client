import { IBaseListResponse } from "@/src/lib/apis/base/base.types";

export type ICustomerOrderResponse = IBaseListResponse<ICustomerOrder>;

export type OrderStatus =
  | "견적 대기"
  | "견적 승인"
  | "제작 중"
  | "제작 완료"
  | "거래 완료";

export type OrderStage =
  | "new"
  | "quote-approval"
  | "in-production"
  | "production-completed"
  | "completed"
  | "";

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

export type IFactoryNewOrderResponse = IBaseListResponse<IFactoryNewOrder>;

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

export type IFactoryOrderResponse = IBaseListResponse<IFactoryOrder>;

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
