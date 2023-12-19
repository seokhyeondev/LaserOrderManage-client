import { jsx } from "@emotion/react";

export type IMyPageMenu = "Account" | "Delivery" | "MangerList";

export interface IMyPageMenuProps {
  currentPage: IMyPageMenu;
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
