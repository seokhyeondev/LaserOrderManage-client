import {
  ICustomerOrderResponse,
  IFactoryNewIssueOrderResponse,
  IFactoryReissueOrderResponse,
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
  GET_FACTORY_REISSUE_ORDER:
    async (): Promise<IFactoryReissueOrderResponse> => {
      const response = await axiosPrivate.get(`/factory/order/new/re-issue`);
      return response.data;
    },
  GET_FACTORY_NEWISSUE_ORDER:
    async (): Promise<IFactoryNewIssueOrderResponse> => {
      const response = await axiosPrivate.get(`/factory/order/new/new-issue`);
      return response.data;
    },
};
