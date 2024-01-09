import { WEB_URL } from "@/src/lib/constants/constant";
import { axiosPrivate } from "../../axios";
import {
  IOrderCommentRequest,
  IOrderCommentsResponse,
  IOrderDetailResponse,
  IDetailUrgentRequest,
  IDetailEditAddressRequest,
  IDetailEditAddressResponse,
  IDetailAddDrawingRequest,
  IDetailAddDrawingResponse,
  IDetailEditDrawingRequest,
  IDetailEditQuotationResponse,
  IDetailEditPurchaseOrderResponse,
} from "./OrderDetail.types";
import { AppPages } from "@/src/lib/constants/appPages";

export const OrderDetailApi = {
  GET_ORDER_DETAIL: async (id: string): Promise<IOrderDetailResponse> => {
    const response = await axiosPrivate.get(`order/${id}/detail`);
    return response.data;
  },
  GET_ORDER_COMMENTS: async (id: string): Promise<IOrderCommentsResponse> => {
    const response = await axiosPrivate.get(`/order/${id}/comment`);
    return response.data;
  },
  POST_ORDER_COMMENT: async ({
    id,
    paylod,
  }: {
    id: string;
    paylod: IOrderCommentRequest;
  }): Promise<null> => {
    const response = await axiosPrivate.post(`/order/${id}/comment`, paylod);
    return response.data;
  },
  PUT_ORDER_URGENT: async ({
    id,
    payload,
  }: {
    id: string;
    payload: IDetailUrgentRequest;
  }): Promise<null> => {
    const response = await axiosPrivate.patch(
      `/factory/order/${id}/urgent`,
      payload,
    );
    return response.data;
  },
  PUT_ORDER_DELIVERY_ADDRESS: async ({
    id,
    payload,
  }: {
    id: string;
    payload: IDetailEditAddressRequest;
  }): Promise<IDetailEditAddressResponse> => {
    const response = await axiosPrivate.patch(
      `/customer/order/${id}/delivery-address`,
      payload,
    );
    return response.data;
  },
  POST_ORDER_DRAWING: async ({
    id,
    payload,
  }: {
    id: string;
    payload: IDetailAddDrawingRequest;
  }): Promise<IDetailAddDrawingResponse> => {
    const response = await axiosPrivate.post(
      `/customer/order/${id}/drawing`,
      payload,
    );
    return response.data;
  },
  PUT_ORDER_DRAWING: async ({
    id,
    drawingId,
    payload,
  }: {
    id: string;
    drawingId: number;
    payload: IDetailEditDrawingRequest;
  }): Promise<null> => {
    const response = await axiosPrivate.patch(
      `/customer/order/${id}/drawing/${drawingId}`,
      payload,
    );
    return response.data;
  },
  DELETE_ORDER_DRAWING: async ({
    id,
    drawingId,
  }: {
    id: string;
    drawingId: number;
  }): Promise<null> => {
    const response = await axiosPrivate.delete(
      `/customer/order/${id}/drawing/${drawingId}`,
    );
    return response.data;
  },
  PUT_ORDER_QUOTATION: async ({
    id,
    payload,
  }: {
    id: string;
    payload: FormData;
  }): Promise<IDetailEditQuotationResponse> => {
    const response = await axiosPrivate.patch(
      `/factory/order/${id}/quotation`,
      payload,
      { headers: { "Content-Type": "multipart/form-data" } },
    );
    return response.data;
  },
  PUT_ACCEPT_QUOTATION: async (id: string): Promise<null> => {
    const response = await axiosPrivate.put(`/customer/order/${id}/quotation`);
    return response.data;
  },
  PUT_ORDER_PURCHASE_ORDER: async ({
    id,
    payload,
  }: {
    id: string;
    payload: FormData;
  }): Promise<IDetailEditPurchaseOrderResponse> => {
    const response = await axiosPrivate.patch(
      `/customer/order/${id}/purchase-order`,
      payload,
      { headers: { "Content-Type": "multipart/form-data" } },
    );
    return response.data;
  },
  PUT_ACCEPT_PURCHASE_ORDER: async (id: string): Promise<null> => {
    const response = await axiosPrivate.put(
      `/factory/order/${id}/purchase-order`,
    );
    return response.data;
  },
  PUT_ACCEPT_PRODUCTION_COMPLETED: async (id: string): Promise<null> => {
    const resposne = await axiosPrivate.patch(
      `/factory/order/${id}/stage/production-completed`,
    );
    return resposne.data;
  },
  POST_ACCEPT_COMPLETED: async ({
    id,
    payload,
  }: {
    id: string;
    payload: FormData;
  }): Promise<null> => {
    const resposne = await axiosPrivate.post(
      `/factory/order/${id}/stage/completed`,
      payload,
      { headers: { "Content-Type": "multipart/form-data" } },
    );
    return resposne.data;
  },
  POST_ACQUIRER_EMAIL: async (id: string): Promise<null> => {
    const response = await axiosPrivate.post(
      `/factory/order/${id}/acquirer/email-link?base-url=${WEB_URL}${AppPages.ACQUIRER}`,
    );
    return response.data;
  },
};
