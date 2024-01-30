import { IDeliveryAddress } from "../../user/customer/Customer.types";
import { Manufacturing, OrderStatus, PostProcessing } from "../Order.types";
import { IBaseListSimpleResponse } from "@/src/lib/apis/base/base.types";

export type IOrderDetailResponse = {
  customer: IDetailCustomer | null;
  order: IDetailOrder;
  quotation: IDetailQuotation | null;
  purchaseOrder: IDetailPurchaseOrder | null;
  acquirer: IDetailAcquirer | null;
};

export type IDetailCustomer = {
  id: number;
  name: string;
  company: string | null;
  phone: string;
  email: string;
};

export type IDetailOrder = {
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
};

export type IDetailDrawing = {
  id: number;
  fileName: string;
  fileSize: string;
  fileType: string;
  fileUrl: string;
  thumbnailUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
};

export type IDetailQuotation = {
  id: number;
  fileName: string;
  fileUrl: string;
  totalCost: number;
  deliveryDate: any;
  createdAt: any;
};

export type IDetailPurchaseOrder = {
  id: number;
  fileName: string;
  fileUrl: string;
  inspectionPeriod: any;
  inspectionCondition: string;
  paymentDate: any;
  createdAt: any;
};

export type IDetailAcquirer = {
  id: number;
  name: string;
  phone: string;
  signatureFileName: string;
  signatureFileUrl: string;
};

export type IOrderCommentsResponse = IBaseListSimpleResponse<IOrderComment>;

export type IOrderComment = {
  id: number;
  authorName: string;
  content: string;
  createdAt: any;
};

export type IOrderCommentRequest = {
  content: string;
};

export type IDetailUrgentRequest = {
  isUrgent: boolean;
};

export type IDetailEditAddressRequest = {
  deliveryAddressId: number;
};

export type IDetailEditAddressResponse = {};

export type IDetailAddDrawingRequest = {
  thumbnailUrl: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  fileUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
};

export type IDetailAddDrawingResponse = {
  id: number;
};

export type IDetailEditDrawingRequest = {
  count: number;
  ingredient: string;
  thickness: number;
};

export type IDetailEditQuotationResponse = {
  id: number;
  fileName: string;
  fileUrl: string;
};

export type IDetailEditPurchaseOrderResponse = {
  id: number;
  fileName: string;
  fileUrl: string;
};
