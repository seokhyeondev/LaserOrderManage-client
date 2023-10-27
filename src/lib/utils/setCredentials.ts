import { IToken } from "../apis/user/User.types";
import { axiosPrivate } from "../apis/axios";

export const setCredentials = (token: IToken) => {
  axiosPrivate.defaults.headers.common[
    "Authorization"
  ] = `${token.grantType} ${token.accessToken}`;
  localStorage.setItem("accessToken", token.accessToken);
};

export const resetCredentials = () => {
  axiosPrivate.defaults.headers.common["Authorization"] = "";
};
