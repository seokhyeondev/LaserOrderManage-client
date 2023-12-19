import { jsx } from "@emotion/react";

export type MyPageMenu = "Account" | "Delivery" | "MangerList";

export interface IMenuItemTitleProps {
  isActive: boolean;
}

export interface IMyPageMenuItemProps {
  title: string;
  isActive: boolean;
  children: jsx.JSX.Element;
  onClick: () => void;
}
