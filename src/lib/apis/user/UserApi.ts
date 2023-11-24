import { axiosPrivate, axiosPublic } from "../axios";
import { IJoinRequest, ILoginRequest, IRequestVerifyRequest, IRequestVerifyResponse, IToken, IVerifyEmailRequest, IVerifyEmailResponse } from "./User.types";

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
  REQUEST_VERIFY: async (payload: IRequestVerifyRequest): Promise<IRequestVerifyResponse> => {
    const response = await axiosPrivate.post("/user/request-verify", payload);
    return response.data;
  },
  VERIFY_EMAIL: async (payload: IVerifyEmailRequest): Promise<IVerifyEmailResponse> => {
    const response = await axiosPrivate.post("/user/verify-email", payload);
    return response.data;
  },
  JOIN: async (payload: IJoinRequest): Promise<IJoinRequest> => {
    const response = await axiosPrivate.post("/user/join/customer", payload);
    return response.data;
  }
};
