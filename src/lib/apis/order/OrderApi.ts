import {
  ICustomerOrderResponse,
  IFactoryNewOrderResponse,
  IFactoryOrderResponse,
  IOrderCustomerInfoResponse,
  IPurchaseOrderFileResponse,
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
      `/customer/order?page=${page}&size=${size}&stage-list=${stage}&manufacturing-list=${manufacturing}&query=${keyword}`,
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
  GET_FACTORY_ORDER: async (
    page: number,
    size: number,
    isCompleted: string,
    isUrgent: string,
    dateCriterion: string,
    startDate: string,
    endDate: string,
    keyword: string,
  ): Promise<IFactoryOrderResponse> => {
    const response = await axiosPrivate.get(
      `/factory/order?page=${page}&size=${size}&is-completed=${isCompleted}&is-urgent=${isUrgent}&date-criterion=${dateCriterion}&start-date=${startDate}&end-date=${endDate}&query=${keyword}`,
    );
    return response.data;
  },
  GET_PURCHASE_ORDER_FILE: async (
    id: string,
  ): Promise<IPurchaseOrderFileResponse> => {
    const response = await axiosPrivate.get(
      `/factory/order/${id}/purchase-order/file`,
    );
    return response.data;
  },
  GET_ORDER_CUSTOMER_INFO: async (
    id: string,
  ): Promise<IOrderCustomerInfoResponse> => {
    const response = await axiosPrivate.get(`/factory/order/${id}/customer`);
    return response.data;
  },
};
