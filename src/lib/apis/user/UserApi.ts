import { axiosPrivate, axiosPublic } from "../axios";
import { ILoginRequest, IToken } from "./User.types";

export const UserApi = {
  LOGIN: async (payload: ILoginRequest): Promise<IToken> => {
    const response = await axiosPublic.post("/user/login", payload);
    return response.data;
  },
  REISSUE: async (): Promise<IToken> => {
    const response = await axiosPrivate.post("/user/re-issue", {
      withCredentials: true,
    });
    return response.data;
  },
  LOGOUT: async (): Promise<null> => {
    const response = await axiosPrivate.post("user/logout");
    return response.data;
  },
};
