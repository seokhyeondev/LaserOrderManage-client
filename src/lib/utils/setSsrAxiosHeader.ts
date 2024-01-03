import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { axiosPrivate } from "../apis/axios";

export const setSsrAxiosHeader = (cookies: NextApiRequestCookies) => {
  axiosPrivate.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${cookies.accessToken}`;
};
