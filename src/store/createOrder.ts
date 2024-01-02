import { atom } from "recoil";
import {
  IDrawing,
  IOrderDeliveryAddress,
} from "../lib/apis/order/create/OrderCreate.types";
import { Manufacturing, PostProcessing } from "../lib/apis/order/Order.types";

export interface ICreateOrderState {
  name: string;
  manufacturing: Manufacturing[];
  postProcessing: PostProcessing[];
  drawingList: IDrawing[];
  request: string;
  deliveryAddress: IOrderDeliveryAddress | null;
  prevAddress: IOrderDeliveryAddress | null;
  isNewIssue: boolean;
}

const initialState: ICreateOrderState = {
  name: "",
  manufacturing: [],
  postProcessing: [],
  drawingList: [],
  request: "",
  deliveryAddress: null,
  prevAddress: null,
  isNewIssue: true,
};

export const createOrderState = atom<ICreateOrderState>({
  key: "createOrderState",
  default: initialState,
});
