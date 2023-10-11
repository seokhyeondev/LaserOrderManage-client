export interface IOrderTabProps {
  tabs: IOrderTab[];
  selectedTab: string;
  onTabClick: (value: string) => void;
}

export interface IOrderTab {
  name: string;
  value: string;
}
