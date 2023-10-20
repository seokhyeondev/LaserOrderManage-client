import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://13.209.132.215:8080",
  headers: { "Content-Type": "application/json" },
});

export const axiosPrivate = axios.create({
  baseURL: "http://13.209.132.215:8080",
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use((config) => {
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export interface IHttpStatus {
  errorCode: string;
  httpStatus: string;
  message: string;
}
