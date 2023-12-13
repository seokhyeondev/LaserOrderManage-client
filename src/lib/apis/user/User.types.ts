import { UserType } from "@/src/store/auth";

export type ILoginRequest = {
  email: string;
  password: string;
};

export type IToken = {
  role: UserType;
  grantType: string;
  accessToken: string;
  accessTokenExpirationTime: string;
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
