import { atom } from "recoil";

export type UserType = "ROLE_CUSTOMER" | "ROLE_FACTORY";

export interface IAuthState {
  isAuthenticated: boolean;
  accessToken: string;
  role: UserType | null;
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
