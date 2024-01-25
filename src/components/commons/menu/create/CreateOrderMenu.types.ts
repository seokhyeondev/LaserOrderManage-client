import { CArray } from "@/src/lib/utils/extensions";
import {
  ICreateProgressBar,
  ISubCreateProgressBar,
} from "../../progressbar/create/CreateProgressbar.types";

export const BASIC_INFO: ICreateProgressBar = {
  id: 0,
  menu: "기본 정보",
  subMenus: new CArray(),
};

export const DRAWING_INFO: ISubCreateProgressBar = {
  id: 0,
  menu: "도면 업로드",
};

export const REQUEST_INFO: ISubCreateProgressBar = { id: 1, menu: "요청사항" };

export const DETAIL_INFO: ICreateProgressBar = {
  id: 1,
  menu: "상세 정보",
  subMenus: new CArray(DRAWING_INFO, REQUEST_INFO),
};

export const DELIVERY_INFO: ICreateProgressBar = {
  id: 2,
  menu: "배송 정보",
  subMenus: new CArray(),
};

export interface ICreateOrderMenuProps {
  pages: ICreateProgressBar[];
  currentPageId: number;
  currentSubPageId: number;
}
