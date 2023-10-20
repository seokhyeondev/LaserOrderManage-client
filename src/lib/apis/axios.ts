import axios from "axios";

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
