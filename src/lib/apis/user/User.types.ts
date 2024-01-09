import { IBaseListSimpleResponse } from "@/src/lib/apis/base/base.types";

export type UserType = "ROLE_CUSTOMER" | "ROLE_FACTORY" | null;

export type ILoginRequest = {
  email: string;
  password: string;
};

export type IToken = {
  role: UserType;
  grantType: string;
  accessToken: string;
  accessTokenExpirationTime: number;
  refreshToken: string;
  refreshTokenExpirationTime: number;
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

export type IEditPasswordRequest = {
  password: string;
};
