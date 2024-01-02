import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  isAxiosError,
} from "axios";
import { UserApi } from "./user/UserApi";
import { setCredentials } from "../utils/setCredentials";

export const axiosPublic = axios.create({
  baseURL: "https://api.kumoh.org",
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: "https://api.kumoh.org",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (!isAxiosError(error)) {
      return Promise.reject(error);
    }

    const status = Number(error.response?.status);
    const origin = error.config as AxiosRequestConfig;

    if (status === 401) {
      const newToken = await UserApi.REISSUE();
      setCredentials(newToken);
      const cookieString = `refreshToken=${newToken.refreshToken}; Path=/; max-age=${newToken.refreshToken}; secure=true; SameSite=None`;
      axiosPrivate.defaults.headers.Cookie = cookieString;
      (origin.headers as AxiosHeaders).set("Set-Cookie", cookieString);
      (origin.headers as AxiosHeaders).set(
        "Authorization",
        `${newToken.grantType} ${newToken.accessToken}`,
      );

      return axios(origin);
    }

    return Promise.reject(error);
  },
);

export interface IHttpStatus {
  errorCode: string;
  httpStatus: string;
  status: number;
  message: string;
}
