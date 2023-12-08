import { atom } from "recoil";
import { IDrawing } from "../lib/apis/order/create/OrderCreate.types";
import { Manufacturing, PostProcessing } from "../lib/apis/order/Order.types";

export interface ICreateOrderState {
  name: string;
  manufacturing: Manufacturing[];
  postProcessing: PostProcessing[];
  drawingList: IDrawing[];
  request: string;
  deliveryAddressId: number | undefined;
  isNewIssue: boolean;
}

export const initialState: ICreateOrderState = {
  name: "",
  manufacturing: [],
  postProcessing: [],
  drawingList: [],
  request: "",
  deliveryAddressId: undefined,
  isNewIssue: true,
};

export const createOrderState = atom<ICreateOrderState>({
  key: "createOrderState",
  default: initialState,
});
