import OrderFilter from "@/src/components/commons/filters/order/customer/OrderFilter.index";
import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { ChangeEvent } from "react";

export default function OrderList() {
  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <BodyWrapper className="flex-column-center">
      <p className="page-title">거래 목록</p>
      <OrderSearchbar
        placeholder="거래 이름으로 검색하기"
        onChangeSearchBar={onChangeKeyword}
      />
      <OrderFilter />
    </BodyWrapper>
  );
}
