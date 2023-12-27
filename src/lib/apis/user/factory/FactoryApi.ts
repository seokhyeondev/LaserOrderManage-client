import { axiosPrivate } from "../../axios";
import {
  IDeleteOrderManagerResponse,
  IEditFactoryRequest,
  IEditFactoryResponse,
  IEditOrderManagerResponse,
  IFactoryResponse,
  IOrderMangerListResponse,
  IOrderMangerRequest,
  IPostOrderManagerResponse,
} from "./Factory.types";

export const FactoryApi = {
  GET_ACCOUNT_INFO: async (): Promise<IFactoryResponse> => {
    const response = await axiosPrivate.get("/factory/user");
    return response.data;
  },
  EDIT_ACCOUNT_INFO: async (
    payload: IEditFactoryRequest,
  ): Promise<IEditFactoryResponse> => {
    const response = await axiosPrivate.patch("/factory/user", payload);
    return response.data;
  },
  GET_ORDER_MANAGER: async (): Promise<IOrderMangerListResponse> => {
    const response = await axiosPrivate.get("/factory/order-manager");
    return response.data;
  },
  POST_ORDER_MANAGER: async (
    payload: IOrderMangerRequest,
  ): Promise<IPostOrderManagerResponse> => {
    const resposne = await axiosPrivate.post("/factory/order-manager", payload);
    return resposne.data;
  },
  EDIT_ORDER_MANAGER: async ({
    id,
    payload,
  }: {
    id: number;
    payload: IOrderMangerRequest;
  }): Promise<IEditOrderManagerResponse> => {
    const response = await axiosPrivate.put(
      `/factory/order-manager/${id}`,
      payload,
    );
    return response.data;
  },
  DELETE_ORDER_MANAGER: async (
    id: number,
  ): Promise<IDeleteOrderManagerResponse> => {
    const response = await axiosPrivate.delete(`/factory/order-manager/${id}`);
    return response.data;
  },
};
