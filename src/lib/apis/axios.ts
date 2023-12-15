import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  isAxiosError,
} from "axios";
import { UserApi } from "./user/UserApi";
import { setCredentials } from "../utils/setCredentials";
import { useSetRecoilState } from "recoil";
import { authState } from "@/src/store/auth";

export const axiosPublic = axios.create({
  baseURL: "http://13.209.132.215",
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: "http://13.209.132.215",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosPrivate.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
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
    const setAuth = useSetRecoilState(authState);

    if (status === 401) {
      const newToken = await UserApi.REISSUE();
      setAuth({ isAuthenticated: true, ...newToken });
      setCredentials(newToken);
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
