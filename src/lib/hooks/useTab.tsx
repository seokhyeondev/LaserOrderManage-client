import { IOrderTab } from "@/src/components/commons/tabs/order/OrderTab.types";
import { useState } from "react";

export const useOrderTab = (
  defaultTab: IOrderTab,
): [IOrderTab, (tab: IOrderTab) => void] => {
  const [tab, setTab] = useState(defaultTab);

  const onTabClick = (tabItem: IOrderTab) => {
    setTab(tabItem);
  };

  return [tab, onTabClick];
};
