import { axiosPrivate, axiosPublic } from "../axios";
import {
  IEditPasswordRequest,
  IEditPasswordResponse,
  IFindEmailRequest,
  IFindEmailResponse,
  IFindPasswordRequest,
  IFindPasswordResponse,
  IJoinRequest,
  IJoinResponse,
  ILoginRequest,
  INotificationResponse,
  IRequestVerifyResponse,
  IToken,
  IVerifyEmailRequest,
  IVerifyEmailResponse,
} from "./User.types";

export const UserApi = {
  LOGIN: async (payload: ILoginRequest): Promise<IToken> => {
    const response = await axiosPublic.post("/user/login", payload);
    return response.data;
  },
  REISSUE: async (): Promise<IToken> => {
    const response = await axiosPrivate.post("/user/re-issue");
    return response.data;
  },
  LOGOUT: async (): Promise<null> => {
    const response = await axiosPrivate.post("/user/logout");
    return response.data;
  },
  REQUEST_VERIFY: async (email: string): Promise<IRequestVerifyResponse> => {
    const response = await axiosPublic.post(
      `/user/request-verify?email=${email}`,
    );
    return response.data;
  },
  VERIFY_EMAIL: async (
    payload: IVerifyEmailRequest,
  ): Promise<IVerifyEmailResponse> => {
    const response = await axiosPublic.post("/user/verify-email", payload);
    return response.data;
  },
  JOIN: async (payload: IJoinRequest): Promise<IJoinResponse> => {
    const response = await axiosPublic.post("/user/join/customer", payload);
    return response.data;
  },
  FIND_EMAIL: async (
    payload: IFindEmailRequest,
  ): Promise<IFindEmailResponse> => {
    const response = await axiosPublic.get("/user/email", { params: payload });
    return response.data;
  },
  FIND_PASSWORD_WITHOUT_AUTH: async (
    payload: IFindPasswordRequest,
  ): Promise<IFindPasswordResponse> => {
    const response = await axiosPublic.post(
      "/user/password/email-link/without-auth",
      payload,
    );
    return response.data;
  },
  FIND_PASSWORD: async (url: string): Promise<IFindPasswordResponse> => {
    const response = await axiosPrivate.post(
      `/user/password/email-link?base-url=${url}`,
    );
    return response.data;
  },
  EDIT_PASSWORD: async (
    payload: IEditPasswordRequest,
  ): Promise<IEditPasswordResponse> => {
    const response = await axiosPrivate.patch("/user/password", payload);
    return response.data;
  },
  PATCH_NOTIFICATION: async (
    isActive: boolean,
  ): Promise<INotificationResponse> => {
    const response = await axiosPrivate.patch(
      `/user/email-notification?is-activate=${isActive}`,
    );
    return response.data;
  },
};
