import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import { ChangeEvent } from "react";
import CustomerOrderList from "./List/OrderList.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderModal } from "@/src/components/commons/hooks/customs/useModal";
import {
  MANUFACTURING,
  STAGE,
} from "@/src/components/commons/filters/order/OrderFilterQueries";
import { useOrderFilter } from "@/src/components/commons/hooks/customs/useFilter";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";

const mockData = {
  id: 0,
  name: "실리콘 부품 제작 프로젝트",
  imgUrl: "asdf",
  stage: "shipping",
  manufacturing: "laser-cutting,bending",
  createdAt: "2023-10-15",
  deliveryAt: "2023-10-30",
  cost: 10000000,
  request: "배송시 부품을 조심히 다뤄주세요.",
};

export default function Order() {
  const { filterMap, onResetFilter, onFilterClick } = useOrderFilter();
  const { isOpen, content, onOpenWithContent, onClose } = useOrderModal();

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">거래 목록</p>
        <OrderSearchbar
          placeholder="거래 이름으로 검색하기"
          onChangeSearchBar={onChangeKeyword}
        />
        <OrderFilter
          filterMap={filterMap}
          filterGroups={[STAGE, MANUFACTURING]}
          onResetFilter={onResetFilter}
          onFilterClick={onFilterClick}
        />
        <CustomerOrderList data={mockData} onOpenModal={onOpenWithContent} />
        <OrderPagination />
      </BodyWrapper>
      <OrderModal isOpen={isOpen} content={content} onClose={onClose} />
    </>
  );
}
