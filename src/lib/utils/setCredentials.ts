import { IToken } from "../apis/user/User.types";
import { axiosPrivate } from "../apis/axios";
import { setCookie, deleteCookie } from "cookies-next";

export const setCredentials = (token: IToken) => {
  axiosPrivate.defaults.headers.common[
    "Authorization"
  ] = `${token.grantType} ${token.accessToken}`;

  setCookie("refreshToken", token.refreshToken);
};

export const resetCredentials = () => {
  axiosPrivate.defaults.headers.common["Authorization"] = "";
  deleteCookie("refreshToken");
};
