import { ICreateProgressbar } from "../../progressbar/create/CreateProgressbar.types";

export const BASIC_INFO: ICreateProgressbar = {
  id: 0,
  title: "기본 정보",
};

export const DETAIL_INFO: ICreateProgressbar = {
  id: 1,
  title: "상세 정보",
  subMenus: [
    { id: 0, title: "도면 업로드" },
    { id: 1, title: "요청사항" },
  ],
};

export const DILIVER_INFO: ICreateProgressbar = {
  id: 2,
  title: "배송 정보",
};

export interface ICreateOrderMenuProps {
  menus: ICreateProgressbar[];
}
