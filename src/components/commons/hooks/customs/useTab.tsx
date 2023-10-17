import { useState } from "react";
import { IOrderTab } from "../../tabs/order/OrderTab.types";

export const useOrderTab = (
  defaultTab: IOrderTab,
): [IOrderTab, (tab: IOrderTab) => void] => {
  const [tab, setTab] = useState(defaultTab);

  const onTabClick = (tabItem: IOrderTab) => {
    setTab(tabItem);
  };

  return [tab, onTabClick];
};
