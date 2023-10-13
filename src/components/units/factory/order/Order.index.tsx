import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import { useOrderFilter } from "@/src/components/commons/hooks/customs/useFilter";
import { useOrderTab } from "@/src/components/commons/hooks/customs/useTab";
import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { ChangeEvent } from "react";

export default function Order() {
  const [tab, onTabClick] = useOrderTab(ORDER_TAB[0]);
  const { filterMap, onResetFilter, onFilterClick } = useOrderFilter();

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">거래 내역</p>
        <OrderTab tabs={ORDER_TAB} selectedTab={tab} onTabClick={onTabClick} />
        <OrderSearchbar
          placeholder="업체, 담당자, 거래 이름으로 검색하기"
          onChangeSearchBar={onChangeKeyword}
        />
        <OrderFilter
          filterMap={filterMap}
          filterGroups={tab.filterGroups}
          onResetFilter={onResetFilter}
          onFilterClick={onFilterClick}
        />
      </BodyWrapper>
    </>
  );
}
