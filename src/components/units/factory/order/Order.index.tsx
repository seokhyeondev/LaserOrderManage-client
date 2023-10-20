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

const mockData = {
  id: 0,
  name: "실리콘 부품 제작 프로젝트",
  customer: "박이박",
  company: "네스로지텍(주)",
  quotation: "complete",
  imgUrl: "asdf",
  isUrgent: true,
  stage: "shipping",
  manufacturing: "laser-cutting,bending",
  createdAt: "2023-10-15",
  deliveryAt: "2023-10-30",
  cost: 10000000,
  request: "배송시 부품을 조심히 다뤄주세요.",
};

export default function Order() {
  const [tab, onTabClick] = useOrderTab(ORDER_TAB[0]);
  const searchBarArgs = useSearchbar();
  const { filterMap, onResetFilter, onFilterClick } = useOrderFilter();
  const [dateFilter, setDateFilter] = useState<IFilterItem>();
  const { isOpen, content, onOpenWithContent, onClose } = useOrderModal();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        <FactoryOrderList data={mockData} onOpenModal={onOpenWithContent} />
      </BodyWrapper>
      <OrderModal isOpen={isOpen} content={content} onClose={onClose} />
    </>
  );
}
