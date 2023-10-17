import { NEW_ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import NewFactoryOrderList from "./List/OrderList.index";
import { useOrderModal } from "@/src/components/commons/hooks/customs/useModal";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderFilter } from "@/src/components/commons/hooks/customs/useFilter";
import { useOrderTab } from "@/src/components/commons/hooks/customs/useTab";

const mockData = {
  id: 0,
  name: "실리콘 부품 제작 프로젝트",
  customer: "박이박",
  company: "네스로지텍(주)",
  customerType: "existing",
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
  const [tab, onTabClick] = useOrderTab(NEW_ORDER_TAB[0]);
  const { filterMap, onResetFilter, onFilterClick } = useOrderFilter();
  const { isOpen, content, onOpenWithContent, onClose } = useOrderModal();

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">신규 거래 목록</p>
        <OrderTab
          tabs={NEW_ORDER_TAB}
          selectedTab={tab}
          onTabClick={onTabClick}
        />
        <OrderFilter
          filterMap={filterMap}
          filterGroups={tab.filterGroups}
          onResetFilter={onResetFilter}
          onFilterClick={onFilterClick}
        />
        <NewFactoryOrderList data={mockData} onOpenModal={onOpenWithContent} />
      </BodyWrapper>
      <OrderModal isOpen={isOpen} content={content} onClose={onClose} />
    </>
  );
}
