import { ICustomerOrderResponse } from "./Order.types";
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
};
