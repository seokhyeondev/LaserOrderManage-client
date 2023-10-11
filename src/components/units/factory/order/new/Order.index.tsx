import { NEW_ISSUE_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { useState } from "react";
import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import {
  CUSTOMER,
  ORDER_TYPE,
  QUOTATION,
} from "@/src/components/commons/filters/order/OrderFilterQueries";
import { IOrderTab } from "@/src/components/commons/tabs/order/OrderTab.types";
import NewFactoryOrderList from "./List/OrderList.index";

export default function Order() {
  const [tab, setTab] = useState(NEW_ISSUE_TAB[0]);
  const [filterMap, setFilterMap] = useState(new Map<number, Array<string>>());
  const [filterGroup, setFilterGroup] = useState([QUOTATION, ORDER_TYPE]);

  const onTabClick = (tabValue: IOrderTab) => {
    setTab(tabValue);
    if (tabValue === NEW_ISSUE_TAB[0]) {
      setFilterGroup([QUOTATION, ORDER_TYPE]);
    } else {
      setFilterGroup([QUOTATION, ORDER_TYPE, CUSTOMER]);
    }
  };

  const onResetFilter = () => {
    setFilterMap(new Map<number, Array<string>>());
  };

  const onFilterClick = (index: number, value: string) => {
    const filteredList = filterMap.get(index) ?? [];
    const isSelected = filteredList.includes(value);
    if (isSelected) {
      const selectedIndex = filteredList.indexOf(value);
      filteredList.splice(selectedIndex, 1);
    } else {
      filteredList.push(value);
    }
    const updatedMap = filterMap.set(index, filteredList);
    setFilterMap(new Map(updatedMap));
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
        <OrderFilter
          filterMap={filterMap}
          filterGroups={filterGroup}
          onResetFilter={onResetFilter}
          onFilterClick={onFilterClick}
        />
        <NewFactoryOrderList />
      </BodyWrapper>
    </>
  );
}
