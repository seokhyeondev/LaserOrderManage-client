export interface IOrderTabProps {
  tabs: OrderTab[];
  selectedTab: OrderTab;
  onTabClick: (tab: OrderTab) => void;
}

export type OrderTab = "재발행" | "신규 발행" | "진행중" | "완료";
