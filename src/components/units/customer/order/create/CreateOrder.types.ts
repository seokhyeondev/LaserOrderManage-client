import {
  Manufacturing,
  PostProcessing,
} from "@/src/lib/apis/order/Order.types";

export interface ICreateOrderPageProps {
  onNext?: () => void;
  onBefore?: () => void;
}

export interface IFormSelectProps {
  isSelect: boolean;
}

export interface INextButtonProps {
  enabled: boolean;
}

export interface IManufacturingSelect {
  name: string;
  key: Manufacturing;
}

export interface IPostProcessingSelect {
  name: string;
  key: PostProcessing;
}

export const MANUFACTURE_SERVICES: IManufacturingSelect[] = [
  { name: "레이저 가공", key: "laser-cutting" },
  { name: "절곡", key: "bending" },
  { name: "용접 및 제작", key: "welding-fabrication" },
];

export const POST_PROCESSING: IPostProcessingSelect[] = [
  { name: "도색", key: "painting" },
  { name: "도금", key: "plating" },
];
