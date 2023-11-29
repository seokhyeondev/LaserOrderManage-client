import { IBaseListResponse } from "@/src/lib/apis/base/base.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";

export interface IOrderCreateRequest {
  name: string;
  manufacturing: string[];
  postProcessing: string[];
  drawingList: IDrawing[];
  request: string;
  deliveryAddressId: number;
  isNewIssue: boolean;
}

export interface IOrderCreateResponse {}

export interface IDrawing {
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
}

export interface IDrawingResponse {
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
}

export interface IOrderHistoryResponse {
  id: number;
  name: string;
  manufacturingList: string[];
  postProcessingList: string[] | null;
  drawingList: IDrawing[];
  request: string | null;
  deliveryAddress: IDeliveryAddress;
}

export interface IOrderHistoryListResponse
  extends IBaseListResponse<IOrderHistory> {}

export interface IOrderHistory {
  id: number;
  name: string;
  imgUrl: string;
  createdAt: any;
}
