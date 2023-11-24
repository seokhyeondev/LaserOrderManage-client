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

export interface IFormSelect {
  name: string;
  key: string;
}

export const MANUFACTURE_SERVICES: IFormSelect[] = [
  { name: "레이저 가공", key: "lazer" },
  { name: "절곡", key: "cutting" },
  { name: "용접 및 제작", key: "make" },
];

export const POST_PROCESSING: IFormSelect[] = [
  { name: "도색", key: "도색" },
  { name: "도금", key: "도금" },
];
