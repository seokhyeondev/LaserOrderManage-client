type MenuStatus = "DONE" | "PROGRESS" | "PENDING";

export interface IMenuProp {
  status: MenuStatus;
}

export interface ICreateProgressbarProps {
  data: ICreateProgressbar;
}

export interface ICreateProgressbar {
  id: number;
  title: string;
  subMenus?: ISubCreateProgressbar[];
}

export interface ISubCreateProgressbar {
  id: number;
  title: string;
}
