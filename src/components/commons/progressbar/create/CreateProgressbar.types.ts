export type MenuStatus = "DONE" | "PROGRESS" | "PENDING";

export interface IMenuProp {
  status: MenuStatus;
}

export interface ICreateProgressBarProps {
  data: ICreateProgressBar;
  currentPageId: number;
  currentSubPageId: number;
}

export interface ICreateProgressBar {
  id: number;
  title: string;
  subMenus?: ISubCreateProgressBar[];
}

export interface ISubCreateProgressBar {
  id: number;
  title: string;
}
