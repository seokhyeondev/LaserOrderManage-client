import { IDeliveryAddress } from "../../user/customer/Customer.types";
import { Manufacturing, OrderStatus, PostProcessing } from "../Order.types";

export interface IOrderDetailResponse {
  customer: IDetailCustomer;
  order: IDetailOrder;
  quotation: IDetailQuotation | null;
  purchaseOrder: IDetailPurchaseOrder | null;
}

export interface IDetailCustomer {
  id: number;
  name: string;
  company: string | null;
  phone: string;
  email: string;
}

export interface IDetailOrder {
  id: number;
  name: string;
  isUrgent: boolean;
  stage: OrderStatus;
  manufacturingList: Manufacturing[];
  postProcessingList: PostProcessing[] | null;
  drawingList: IDetailDrawing[];
  request: string | null;
  deliveryAddress: IDeliveryAddress;
  createdAt: any;
}

export interface IDetailDrawing {
  id: number;
  fileName: string;
  fileSize: string;
  fileType: string;
  fileUrl: string;
  thumbnailUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
}

export interface IDetailQuotation {
  id: number;
  fileUrl: string;
  totalCost: number;
  deliveryDate: any;
  createdAt: any;
}

export interface IDetailPurchaseOrder {
  id: number;
  inspectionPeriod: any;
  inspectionCondition: string;
  paymentDate: any;
  createdAt: any;
}

export interface IOrderCommentsResponse {
  contents: IOrderComment[];
  totalElements: number;
}

export interface IOrderComment {
  id: number;
  authorName: string;
  content: string;
  createdAt: any;
}
