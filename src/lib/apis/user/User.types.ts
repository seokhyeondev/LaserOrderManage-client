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
