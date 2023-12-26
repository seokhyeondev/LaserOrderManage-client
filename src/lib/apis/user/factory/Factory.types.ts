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

export type IEditFactoryRequest = {
  companyName: string;
  representative: string;
  phone: string;
  fax: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
};

export type IEditFactoryResponse = {};

export type IOrderManager = {
  id: number;
  name: string;
  phone: string;
};

export type IOrderMangerListResponse = IBaseListSimpleResponse<IOrderManager>;

export type IPostOrderMangerRequest = {
  name: string;
  phone: string;
};

export type IPostOrderManagerResponse = {};

export type IEditOrderManagerRequest = {
  name: string;
  phone: string;
};

export type IEditOrderManagerResponse = {};

export type IDeleteOrderManagerResponse = {};
