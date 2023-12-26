import { IBaseListResponse } from "@/src/lib/apis/base/base.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { Manufacturing, PostProcessing } from "../Order.types";

export type IOrderCreateRequest = {
  name: string;
  manufacturing: Manufacturing[];
  postProcessing: PostProcessing[];
  drawingList: IDrawing[];
  request: string;
  deliveryAddressId: number;
  isNewIssue: boolean;
};

export type IOrderCreateResponse = {};

export type IDrawing = {
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  count: number;
  ingredient: string;
  thickness: number;
};

export type IDrawingResponse = {
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
};

export type IOrderHistoryResponse = {
  id: number;
  name: string;
  manufacturingList: Manufacturing[];
  postProcessingList: PostProcessing[] | null;
  drawingList: IDrawing[];
  request: string | null;
  deliveryAddress: IDeliveryAddress;
};

export type IOrderHistoryListResponse = IBaseListResponse<IOrderHistory>;

export type IOrderHistory = {
  id: number;
  name: string;
  imgUrl: string;
  createdAt: any;
};
