import {
  Manufacturing,
  ManufacturingName,
  PostProcessing,
  PostProcessingName,
} from "@/src/lib/apis/order/Order.types";

export interface ICreateOrderPageProps {
  onNext?: () => void;
  onBefore?: () => void;
}

export interface IFormSelectProps {
  isSelect: boolean;
}

export interface IManufacturingSelect {
  name: ManufacturingName;
  key: Manufacturing;
}

export interface IPostProcessingSelect {
  name: PostProcessingName;
  key: PostProcessing;
}

export const MANUFACTURE_SERVICES: IManufacturingSelect[] = [
  { name: "레이저 가공", key: "laser-cutting" },
  { name: "절곡", key: "bending" },
  { name: "용접", key: "welding" },
];

export const POST_PROCESSING: IPostProcessingSelect[] = [
  { name: "도색", key: "painting" },
  { name: "도금", key: "plating" },
];
