import { CArray } from "@/src/lib/utils/extensions";

export type MenuStatus = "DONE" | "PROGRESS" | "PENDING";

export interface IMenuProp {
  status: MenuStatus;
}

export interface ICreateProgressBarProps {
  data: ICreateProgressBar;
  currentPageId: number;
  currentSubPageId: number;
}

type CreateProgess = "기본 정보" | "상세 정보" | "배송 정보";

type CreateSubProgress = "도면 업로드" | "요청사항";

export interface ICreateProgressBar {
  id: number;
  menu: CreateProgess;
  subMenus: CArray<ISubCreateProgressBar>;
}

export interface ISubCreateProgressBar {
  id: number;
  menu: CreateSubProgress;
}
