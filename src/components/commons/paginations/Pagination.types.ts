import { MouseEvent } from "react";

export interface IPageProps {
  isActive: boolean;
}

export interface IPaginationProps {
  startPage: number;
  activedPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}
