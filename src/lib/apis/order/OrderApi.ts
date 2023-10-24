import { ICustomerOrderResponse } from "./Order.types";
import { axiosPrivate } from "../axios";

export const OrderApi = {
  GET_CUSTOMER_ORDER: async (
    keyword: string,
  ): Promise<ICustomerOrderResponse> => {
    const response = await axiosPrivate.get(`/customer/order?query=${keyword}`);
    return response.data;
  },
};
