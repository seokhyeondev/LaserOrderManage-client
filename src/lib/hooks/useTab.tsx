import { IOrderTab } from "@/src/components/commons/tabs/order/OrderTab.types";
import { useEffect, useState } from "react";

export const useOrderTab = (
  defaultTab: IOrderTab,
  refetch: () => void,
): [IOrderTab, (tab: IOrderTab) => void] => {
  const [tab, setTab] = useState(defaultTab);

  const onTabClick = (tabItem: IOrderTab) => {
    if (tab !== tabItem) {
      setTab(tabItem);
      refetch();
    }
  };

  return [tab, onTabClick];
};
