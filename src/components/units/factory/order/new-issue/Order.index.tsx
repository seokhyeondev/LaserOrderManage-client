import { NEW_ISSUE_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/Ordertab.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { useState } from "react";

export default function Order() {
  const [tab, setTab] = useState("re");

  const onTabClick = (tabValue: string) => {
    setTab(tabValue);
  };

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">신규 거래 목록</p>
        <OrderTab
          tabs={NEW_ISSUE_TAB}
          selectedTab={tab}
          onTabClick={onTabClick}
        />
      </BodyWrapper>
    </>
  );
}
