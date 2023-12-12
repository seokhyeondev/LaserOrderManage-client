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
  fileName: string;
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

export interface IOrderCommentRequest {
  content: string;
}

export interface IOrderCommentResponse {}

export interface IDetailUrgentRequest {
  isUrgent: boolean;
}

export interface IDetailUrgentResponse {}

export interface IDetailEditAddressRequest {
  deliveryAddressId: number;
}

export interface IDetailEditAddressResponse {}

export interface IDetailAddDrawingRequest {
  thumbnailUrl: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  fileUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
}

export interface IDetailAddDrawingResponse {
  id: number;
}

export interface IDetailEditDrawingRequest {
  count: number;
  ingredient: string;
  thickness: number;
}

export interface IDetailEditDrawingResponse {}

export interface IDetailDeleteDrawingResponse {}

export interface IDetailEditQuotationResponse {}

export interface IDetailEditPurchaseOrderRequest {
  inspectionPeriod: string;
  inspectionCondition: string;
  paymentDate: string;
}
