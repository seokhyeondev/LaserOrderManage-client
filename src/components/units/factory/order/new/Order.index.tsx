import { NEW_ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderFilter } from "@/src/lib/hooks/useFilter";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import FactoryNewOrderList from "./List/OrderList.index";

const mockData = {
  orderList: [],
};

export default function Order() {
  const [tab, onTabClick] = useOrderTab(NEW_ORDER_TAB[0]);
  const filterArgs = useOrderFilter(() => {});
  const modalArgs = useOrderModal();

  return (
    <>
      <BodyWrapper className="flex-column-center">
        <p className="page-title">신규 거래 목록</p>
        <OrderTab
          tabs={NEW_ORDER_TAB}
          selectedTab={tab}
          onTabClick={onTabClick}
        />
        <OrderFilter filterGroups={tab.filterGroups} {...filterArgs} />
        <FactoryNewOrderList
          data={mockData}
          onOpenModal={modalArgs.onOpenWithContent}
        />
      </BodyWrapper>
      <OrderModal {...modalArgs} />
    </>
  );
}
