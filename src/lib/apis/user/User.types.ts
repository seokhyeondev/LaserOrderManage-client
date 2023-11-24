import { UserType } from "@/src/store/auth";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IToken {
  role: UserType;
  grantType: string;
  accessToken: string;
  accessTokenExpirationTime: string;
}

export interface IRequestVerifyRequest {
  email: string;
}

export interface IRequestVerifyResponse {
  email: string | null;
  name: string | null;
  createdAt: any | null;
  status: string;
}

export interface IVerifyEmailRequest {
  email: string;
  code: string;
}

export interface IVerifyEmailResponse {
  email: string | null;
  name: string | null;
  createdAt: any | null;
  status: string;
}

export interface IJoinRequest {
  email: string;
  password: string;
  name: string;
  companyName: string | null;
  phone: string;
  zipCode: string;
  address: string;
  detailAddress: string | null;
}

export interface IJoinResponse {
  email: string;
  name: string;
  createdAt: any;
  status: string;
}

