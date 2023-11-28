import {
  IDeliveryAddressListResponse,
  IDeliveryAddressRequest,
  IDeliveryAddressResponse,
} from "./Customer.types";
import { axiosPrivate } from "../../axios";

export const CustomerApi = {
  POST_DELIVERY_ADDRESS: async (
    payload: IDeliveryAddressRequest,
  ): Promise<IDeliveryAddressResponse> => {
    const response = await axiosPrivate.post(
      "/customer/delivery-address",
      payload,
    );
    return response.data;
  },
  GET_DELIVERY_ADDRESS: async (): Promise<IDeliveryAddressListResponse> => {
    const response = await axiosPrivate.get("/customer/delivery-address");
    return response.data;
  },
};
