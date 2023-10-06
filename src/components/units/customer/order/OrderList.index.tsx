import OrderFilter from "@/src/components/commons/filters/order/customer/OrderFilter.index";
import OrderProgressbar from "@/src/components/commons/progressbar/order/OrderProgressbar.index";
import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { ChangeEvent, useState } from "react";

export default function OrderList() {
  const [filterMap, setFilterMap] = useState(new Map<number, Array<string>>());

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {};

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
    <BodyWrapper className="flex-column-center">
      <p className="page-title">거래 목록</p>
      <OrderSearchbar
        placeholder="거래 이름으로 검색하기"
        onChangeSearchBar={onChangeKeyword}
      />
      <OrderFilter
        onResetFilter={onResetFilter}
        onFilterClick={onFilterClick}
        filterMap={filterMap}
      />
      <OrderProgressbar stage={"shipping"} />
    </BodyWrapper>
  );
}
