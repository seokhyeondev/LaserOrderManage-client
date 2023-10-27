import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { useState } from "react";
import FactoryOrderList from "./List/OrderList.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import OrderFilterWithDate from "@/src/components/commons/filters/order/OrderFilterWithDate.index";
import { IFilterItem } from "@/src/components/commons/filters/order/OrderFilter.types";
import { useOrderFilter } from "@/src/lib/hooks/useFilter";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useSearchbar } from "@/src/lib/hooks/useSearchBar";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";

export default function Order() {
  const [tab, onTabClick] = useOrderTab(ORDER_TAB[0]);
  const searchBarArgs = useSearchbar(() => {});
  const { filterMap, onResetFilter, onFilterClick } = useOrderFilter(() => {});
  const [dateFilter, setDateFilter] = useState<IFilterItem>();
  const { isOpen, content, onOpenWithContent, onClose } = useOrderModal();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data, refetch } = useQuery({
    queryKey: ["factoryOrder"],
    queryFn: () => OrderApi.GET_FACTORY_ORDER(),
  });

  const onResetFilterWithDate = () => {
    onResetFilter();
    setDateFilter(undefined);
    setStartDate("");
    setEndDate("");
  };

  const onDateFilter = (filterItem: IFilterItem) => {
    setDateFilter(filterItem);
  };

  const onStartDate = (date: string) => {
    setStartDate(date);
  };

  const onEndDate = (date: string) => {
    setEndDate(date);
  };

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">거래 내역</p>
        <OrderTab tabs={ORDER_TAB} selectedTab={tab} onTabClick={onTabClick} />
        <OrderSearchbar
          placeholder="업체, 담당자, 거래 이름으로 검색하기"
          {...searchBarArgs}
        />
        <OrderFilterWithDate
          filterMap={filterMap}
          filterGroups={tab.filterGroups}
          onResetFilter={onResetFilterWithDate}
          onFilterClick={onFilterClick}
          selectedDateFilter={dateFilter}
          startDate={startDate}
          endDate={endDate}
          onDateFilter={onDateFilter}
          onStartDate={onStartDate}
          onEndDate={onEndDate}
        />
        {data && (
          <FactoryOrderList data={data} onOpenModal={onOpenWithContent} />
        )}
      </BodyWrapper>
      <OrderModal isOpen={isOpen} content={content} onClose={onClose} />
    </>
  );
}
