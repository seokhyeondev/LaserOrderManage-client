import { UserType } from "@/src/store/auth";
import { jsx } from "@emotion/react";

export type IMyPageMenu = "Account" | "Delivery" | "MangerList";

export interface IMyPageMenuProps {
  currentPage: IMyPageMenu;
  role: UserType;
  onChangePage: (page: IMyPageMenu) => void;
}

export interface IMyPageMenuItemProps {
  title: string;
  isActive: boolean;
  children: jsx.JSX.Element;
  onClick: () => void;
}

export interface IMenuItemTitleProps {
  isActive: boolean;
}
