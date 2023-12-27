import { UserType } from "@/src/store/auth";
import { IBaseListSimpleResponse } from "@/src/lib/apis/base/base.types";

export type ILoginRequest = {
  email: string;
  password: string;
};

export type IToken = {
  role: UserType;
  grantType: string;
  accessToken: string;
  accessTokenExpirationTime: string;
  refreshToken: string;
  refreshTokenExpirationTime: string;
};

export type IRequestVerifyResponse = {
  email: string | null;
  name: string | null;
  createdAt: any | null;
  status: string;
};

export type IVerifyEmailRequest = {
  email: string;
  code: string;
};

export type IVerifyEmailResponse = {
  email: string | null;
  name: string | null;
  createdAt: any | null;
  status: string;
};

export type IJoinRequest = {
  email: string;
  password: string;
  name: string;
  companyName: string | null;
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
};

export type IJoinResponse = {
  email: string;
  name: string;
  createdAt: any;
  status: string;
};

export type IFindEmailRequest = {
  name: string;
  phone: string;
};

export type IFindEmail = {
  name: string;
  email: string;
};

export type IFindEmailResponse = IBaseListSimpleResponse<IFindEmail>;

export type IFindPasswordRequest = {
  email: string;
  baseUrl: string;
};

export type IFindPasswordResponse = {};

export type IEditPasswordRequest = {
  password: string;
};

export type IEditPasswordResponse = {};

export type INotificationResponse = {};
