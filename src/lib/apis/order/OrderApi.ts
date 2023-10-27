import {
  ICustomerOrderResponse,
  IFactoryNewOrderResponse,
  IFactoryOrderResponse,
} from "./Order.types";
import { axiosPrivate } from "../axios";

export const OrderApi = {
  GET_CUSTOMER_ORDER: async (
    page: number,
    size: number,
    stage: string,
    manufacturing: string,
    keyword: string,
  ): Promise<ICustomerOrderResponse> => {
    const response = await axiosPrivate.get(
      `/customer/order?page=${page}&size=${size}&stage=${stage}&manufacturing=${manufacturing}&query=${keyword}`,
    );
    return response.data;
  },
  GET_FACTORY_REISSUE_ORDER: async (
    page: number,
    size: number,
    hasQuotation: string,
    isUrgent: string,
  ): Promise<IFactoryNewOrderResponse> => {
    const response = await axiosPrivate.get(
      `/factory/order/new/re-issue?page=${page}&size=${size}&has-quotation=${hasQuotation}&is-urgent=${isUrgent}`,
    );
    return response.data;
  },
  GET_FACTORY_NEWISSUE_ORDER: async (
    page: number,
    size: number,
    hasQuotation: string,
    isNew: string,
    isUrgent: string,
  ): Promise<IFactoryNewOrderResponse> => {
    const response = await axiosPrivate.get(
      `/factory/order/new/new-issue?page=${page}&size=${size}&has-quotation=${hasQuotation}&is-new-customer=${isNew}&is-urgent=${isUrgent}`,
    );
    return response.data;
  },
  GET_FACTORY_ORDER: async (): Promise<IFactoryOrderResponse> => {
    const response = await axiosPrivate.get(`/factory/order`);
    return response.data;
  },
};
