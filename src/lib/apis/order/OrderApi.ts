import { ICustomerOrderResponse } from "./Order.types";
import { axiosPrivate } from "../axios";

export const OrderApi = {
  GET_CUSTOMER_ORDER: async (): Promise<ICustomerOrderResponse> => {
    const response = await axiosPrivate.get(`/customer/order`);
    return response.data;
  },
};
