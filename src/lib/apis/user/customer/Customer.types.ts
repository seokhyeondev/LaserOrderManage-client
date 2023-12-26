import { IBaseListSimpleResponse } from "@/src/lib/apis/base/base.types";

export type IDeliveryAddressListResponse =
  IBaseListSimpleResponse<IDeliveryAddress>;

export type IDeliveryAddressRequest = {
  deliveryName: string;
  zipCode: string;
  address: string;
  detailAddress: string;
  receiver: string;
  phone1: string;
  phone2: string | null;
  isDefault: boolean;
};

export type IDeliveryAddressResponse = {};

export type IEditDeliveryAddressResponse = {};

export type IDeleteDeliveryAddressResponse = {};

export type IDeliveryAddress = {
  id: number;
  name: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
  receiver: string;
  phone1: string;
  phone2: string | null;
  isDefault: boolean;
};

export type ICustomerAccountResponse = {
  email: string;
  name: string;
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
  companyName: string | null;
  emailNotifiaction: boolean;
};

export type ICustomerUser = {
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
};

export type IEditCustomerAccountRequest = {
  name: string;
  companyName: string | null;
  user: ICustomerUser;
};
