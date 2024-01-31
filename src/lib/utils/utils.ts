import {
  Manufacturing,
  ManufacturingName,
  OrderStage,
  OrderStatus,
  PostProcessing,
} from "../apis/order/Order.types";
import { Unit, UnitName } from "../apis/stock/Stock.types";

export const getDate = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getDateTime = (value: any) => {
  const now = new Date();
  const date = new Date(value);

  if (now.getFullYear() !== date.getFullYear()) {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }

  const dayDiff = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );
  const hourDiff = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60),
  );

  if (dayDiff === 0) return hourDiff <= 1 ? "방금" : `${hourDiff}시간 전`;
  if (dayDiff === 1) return "어제";
  if (dayDiff > 7) return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  return `${dayDiff}일 전`;
};

export const getParamDate = (value: string): string => {
  if (value === "") {
    return "";
  }
  const [yy, mm, dd] = value.split(".").map((part) => part.trim());
  return `20${yy}-${mm}-${dd}`;
};

export const getCost = (value: number) => {
  const cost = value.toLocaleString("ko-KR");
  return `${cost}원`;
};

export const getCustomerInfo = (
  name: string,
  company: string | null,
  isNew?: boolean | undefined,
): string => {
  const infos: string[] = [];
  infos.push(name);
  if (company) {
    infos.push(company);
  }
  if (isNew !== undefined) {
    if (isNew) {
      infos.push("신규 고객");
    } else {
      infos.push("기존 고객");
    }
  }
  return infos.join(" · ");
};

export const getAddress = (
  address: string,
  detailAddress: string | null,
): string => {
  if (detailAddress) {
    return `(${address}, ${detailAddress})`;
  }
  return `(${address})`;
};

export const getFullAddress = (
  zoneCode: string,
  address: string,
  detailAddress: string | null,
): string => {
  if (detailAddress && detailAddress !== "") {
    return `[${zoneCode}] ${address}, ${detailAddress}`;
  }
  return `[${zoneCode}] ${address}`;
};

export const getPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export const getFileSize = (fileSize: number): string => {
  if (fileSize < 1024) {
    return `${fileSize.toFixed(2)} B`;
  } else if (fileSize < 1024 * 1024) {
    return `${(fileSize / 1024).toFixed(2)} KB`;
  } else return `${(fileSize / (1024 * 1024)).toFixed(2)} MB`;
};

const OrderStageMap = new Map<OrderStage, OrderStatus>([
  ["new", "견적 대기"],
  ["quote-approval", "견적 승인"],
  ["in-production", "제작 중"],
  ["production-completed", "제작 완료"],
  ["completed", "거래 완료"],
]);

const ManufacturingMap = new Map<Manufacturing, ManufacturingName>([
  ["laser-cutting", "레이저 가공"],
  ["bending", "절곡"],
  ["welding-fabrication", "용접"],
]);

const PostprocessingMap = new Map<PostProcessing, string>([
  ["painting", "도색"],
  ["plating", "도금"],
]);

const UnitMap = new Map<Unit, UnitName>([
  ["count", "수량"],
  ["weight", "무게"],
]);

export const getOrderStatus = (key: OrderStage) => OrderStageMap.get(key);

export const getManufacuring = (key: Manufacturing) =>
  ManufacturingMap.get(key)!!;

export const getUnits = (key: Unit) => UnitMap.get(key)!!;

const getPostprocessing = (key: PostProcessing) => PostprocessingMap.get(key)!!;

export const getManufacurings = (keys: Manufacturing[]) => {
  const manufacturings: string[] = [];
  keys.forEach((key) => manufacturings.push(getManufacuring(key)));
  return manufacturings.join(", ");
};

export const getPostprocessings = (keys: PostProcessing[]) => {
  const postProcessings: string[] = [];
  keys.forEach((key) => postProcessings.push(getPostprocessing(key)));
  return postProcessings.join(", ");
};
