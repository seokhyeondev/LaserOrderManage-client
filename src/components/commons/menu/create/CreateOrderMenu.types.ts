import { ICreateProgressBar, ISubCreateProgressBar } from "../../progressbar/create/CreateProgressbar.types";

export const BASIC_INFO: ICreateProgressBar = { id: 0, title: "기본 정보"};

export const DRAWING_INFO: ISubCreateProgressBar = {id: 0, title: "도면 업로드"}

export const REQUEST_INFO: ISubCreateProgressBar = {id: 1, title:"요청사항"}

export const DETAIL_INFO: ICreateProgressBar = { id: 1, title: "상세 정보", subMenus: [DRAWING_INFO, REQUEST_INFO]};

export const DELIVER_INFO: ICreateProgressBar = { id: 2, title: "배송 정보"};

export interface ICreateOrderMenuProps {
  pages: ICreateProgressBar[];
  currentPageId: number;
  currentSubPageId: number;
}
