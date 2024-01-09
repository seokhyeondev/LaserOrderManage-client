import { atom } from "recoil";
import { UserType } from "../lib/apis/user/User.types";

export interface IAuthState {
  isAuthenticated: boolean;
  accessToken: string;
  role: UserType;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  accessToken: "",
  role: null,
};

export const authState = atom<IAuthState>({
  key: "authState",
  default: initialState,
});
