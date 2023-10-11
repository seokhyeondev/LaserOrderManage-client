export interface IOrderTabProps {
  tabs: IOrderTab[];
  selectedTab: IOrderTab;
  onTabClick: (value: IOrderTab) => void;
}

export interface IOrderTab {
  name: string;
  value: string;
}
