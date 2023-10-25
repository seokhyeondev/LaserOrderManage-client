import { NEW_ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderFilter } from "@/src/lib/hooks/useFilter";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import FactoryNewOrderList from "./List/OrderList.index";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";

export default function Order() {
  const [tab, onTabClick] = useOrderTab(NEW_ORDER_TAB[0], () => refetch());
  const filterArgs = useOrderFilter(() => {});
  const modalArgs = useOrderModal();

  const { data, refetch } = useQuery({
    queryKey: ["factoryNewOrder", tab],
    queryFn:
      tab === NEW_ORDER_TAB[0]
        ? () => OrderApi.GET_FACTORY_NEWISSUE_ORDER()
        : () => OrderApi.GET_FACTORY_REISSUE_ORDER(),
  });

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
        {data && (
          <FactoryNewOrderList
            data={data}
            onOpenModal={modalArgs.onOpenWithContent}
          />
        )}
      </BodyWrapper>
      <OrderModal {...modalArgs} />
    </>
  );
}
