import { IFilterGroup } from "../../filters/OrderFilter.types";

export interface IOrderTabProps {
  tabs: IOrderTab[];
  selectedTab: IOrderTab;
  onTabClick: (value: IOrderTab) => void;
}

export interface IOrderTab {
  name: string;
  value: string;
  filterGroups: IFilterGroup[];
}
