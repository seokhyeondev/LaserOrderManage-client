import { MouseEvent } from "react";

export interface IPageProps {
  isActive: boolean;
}

export interface IPaginationProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}
