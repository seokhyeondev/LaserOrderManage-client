export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IToken {
  role: string;
  grantType: string;
  accessToken: string;
  accessTokenExpirationTime: string;
}
