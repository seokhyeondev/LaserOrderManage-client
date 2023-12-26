import { atom } from "recoil";

export interface IMyInfoState {
  name: string;
  company: string | null;
}

const initialState: IMyInfoState = {
  name: "",
  company: null,
};

export const myInfoState = atom<IMyInfoState>({
  key: "myInfoState",
  default: initialState,
});
