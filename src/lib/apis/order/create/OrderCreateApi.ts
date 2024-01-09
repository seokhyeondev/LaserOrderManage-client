import {
  IOrderHistoryListResponse,
  IOrderHistoryResponse,
  IDrawingResponse,
  IOrderCreateRequest,
} from "./OrderCreate.types";
import { axiosPrivate } from "../../axios";

export const OrderCreateApi = {
  GET_ORDER_HISTORY_LIST: async (
    page: number,
    size: number,
    query: string,
  ): Promise<IOrderHistoryListResponse> => {
    const response = await axiosPrivate.get(
      `/customer/order/history?page=${page}&size=${size}&query=${query}`,
    );
    return response.data;
  },
  GET_ORDER_HISTORY: async (
    orderId: number,
  ): Promise<IOrderHistoryResponse> => {
    const response = await axiosPrivate.get(
      `/customer/order/history/${orderId}`,
    );
    return response.data;
  },
  UPLOAD_DRAWING: async (payload: FormData): Promise<IDrawingResponse> => {
    const response = await axiosPrivate.post("/drawing", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },
  ORDER_CREATE: async (payload: IOrderCreateRequest): Promise<null> => {
    const response = await axiosPrivate.post("/customer/order", payload);
    return response.data;
  },
};
