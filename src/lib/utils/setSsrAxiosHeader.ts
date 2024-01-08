import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { axiosPrivate } from "../apis/axios";

export const setSsrAxiosHeader = (cookies: NextApiRequestCookies) => {
  if (cookies.accessToken) {
    axiosPrivate.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookies.accessToken}`;
  }
};
