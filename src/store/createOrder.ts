import { atom } from "recoil";
import { IDrawing } from "../lib/apis/order/create/OrderCreate.types";

export interface ICreateOrderState {
    name: string;
    manufacturing: string[];
    postProcessing: string[];
    drawingList: IDrawing[];
    request: string;
    deliveryAddressId: number;
    isNewIssue: boolean;
}

const initialState: ICreateOrderState = {
    name: "",
    manufacturing: [],
    postProcessing: [],
    drawingList: [],
    request: "",
    deliveryAddressId: -1,
    isNewIssue: false,
}

export const createOrderState = atom<ICreateOrderState>({
    key: "createOrderState",
    default: initialState,
})
