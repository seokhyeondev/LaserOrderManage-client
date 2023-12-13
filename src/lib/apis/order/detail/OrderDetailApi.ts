import { axiosPrivate } from "../../axios";
import {
  IOrderCommentRequest,
  IOrderCommentResponse,
  IOrderCommentsResponse,
  IOrderDetailResponse,
} from "./OrderDetail.types";

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
  }): Promise<IOrderCommentResponse> => {
    const response = await axiosPrivate.post(`/order/${id}/comment`, paylod);
    return response.data;
  },
};
