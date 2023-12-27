import {
  ICustomerAccountResponse,
  IDeleteDeliveryAddressResponse,
  IDeliveryAddressListResponse,
  IDeliveryAddressRequest,
  IDeliveryAddressResponse,
  IEditCustomerAccountRequest,
  IEditDeliveryAddressResponse,
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
  EDIT_DELIVERY_ADDRESS: async ({
    id,
    payload,
  }: {
    id: number;
    payload: IDeliveryAddressRequest;
  }): Promise<IEditDeliveryAddressResponse> => {
    const repsonse = await axiosPrivate.put(
      `/customer/delivery-address/${id}`,
      payload,
    );
    return repsonse.data;
  },
  DELETE_DELIVERY_ADDRESS: async (
    id: number,
  ): Promise<IDeleteDeliveryAddressResponse> => {
    const response = await axiosPrivate.delete(
      `/customer/delivery-address/${id}`,
    );
    return response.data;
  },
  GET_ACCOUNT_INFO: async (): Promise<ICustomerAccountResponse> => {
    const resposne = await axiosPrivate.get("/customer/user");
    return resposne.data;
  },
  EDIT_ACCOUNT_INFO: async (
    payload: IEditCustomerAccountRequest,
  ): Promise<IEditDeliveryAddressResponse> => {
    const response = await axiosPrivate.patch("/customer/user", payload);
    return response.data;
  },
};
