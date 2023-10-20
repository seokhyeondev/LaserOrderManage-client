import { axiosPrivate } from "../axios";
import { ILoginRequest, IToken } from "./User.types";

export const UserApi = {
  LOGIN: async (payload: ILoginRequest): Promise<IToken> => {
    const response = await axiosPrivate.post("/user/login", payload);
    return response.data.data;
  },
  REISSUE: async (): Promise<IToken> => {
    const response = await axiosPrivate.post("/user/re-issue");
    return response.data.data;
  },
  LOGOUT: async (): Promise<boolean> => {
    const response = await axiosPrivate.post("user/logout");
    return response.status === 200;
  },
};
