import { IBaseListSimpleResponse } from "@/src/lib/apis/base/base.types";

export type IFactoryResponse = {
  email: string;
  companyName: string;
  representative: string;
  phone: string;
  fax: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
  emailNotification: boolean;
};

export type IFactoryUser = {
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
};

export type IEditFactoryRequest = {
  companyName: string;
  representative: string;
  fax: string;
  user: IFactoryUser;
};

export type IEditFactoryResponse = {};

export type IOrderManager = {
  id: number;
  name: string;
  phone: string;
};

export type IOrderMangerListResponse = IBaseListSimpleResponse<IOrderManager>;

export type IOrderMangerRequest = {
  name: string;
  phone: string;
};

export type IPostOrderManagerResponse = {};

export type IEditOrderManagerResponse = {};

export type IDeleteOrderManagerResponse = {};
