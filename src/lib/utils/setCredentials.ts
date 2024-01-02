import { IToken } from "../apis/user/User.types";
import { axiosPrivate } from "../apis/axios";
import { setCookie, deleteCookie } from "cookies-next";

export const setCredentials = (token: IToken) => {
  axiosPrivate.defaults.headers.common[
    "Authorization"
  ] = `${token.grantType} ${token.accessToken}`;

  if (process.env.NODE_ENV === "development") {
    setCookie("refreshToken", token.refreshToken, {
      maxAge: token.refreshTokenExpirationTime,
      domain: ".kumoh.org",
      secure: true,
      sameSite: "none",
      path: "/",
    });
  }
};

export const resetCredentials = () => {
  axiosPrivate.defaults.headers.common["Authorization"] = "";
  if (process.env.NODE_ENV === "development") {
    deleteCookie("refreshToken");
  }
};
