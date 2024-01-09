import { AppPages } from "../../constants/appPages";
import { WEB_URL } from "../../constants/constant";
import { axiosPrivate, axiosPublic } from "../axios";
import {
  IEditPasswordRequest,
  IFindEmailRequest,
  IFindEmailResponse,
  IFindPasswordRequest,
  IJoinRequest,
  IJoinResponse,
  ILoginRequest,
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
  ): Promise<null> => {
    const response = await axiosPublic.post(
      "/user/password/email-link/without-auth",
      payload,
    );
    return response.data;
  },
  FIND_PASSWORD: async (): Promise<null> => {
    const response = await axiosPrivate.post(
      `/user/password/email-link?base-url=${WEB_URL}${AppPages.EDIT_PASSWORD}`,
    );
    return response.data;
  },
  EDIT_PASSWORD: async ({
    payload,
    token,
  }: {
    payload: IEditPasswordRequest;
    token: string;
  }): Promise<null> => {
    const response = await axiosPublic.patch("/user/password", payload, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return response.data;
  },
  PATCH_NOTIFICATION: async (isActive: boolean): Promise<null> => {
    const response = await axiosPrivate.patch(
      `/user/email-notification?is-activate=${isActive}`,
    );
    return response.data;
  },
};
