import { NEW_ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import {
  BodyWrapper,
  PageTitle,
} from "@/src/components/commons/wrapper/BodyWrapper.styles";
import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderSelectFilter } from "@/src/lib/hooks/useFilter";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import FactoryNewOrderList from "./List/OrderList.index";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import {
  CUSTOMER,
  ORDER_TYPE,
  QUOTATION,
} from "@/src/components/commons/filters/order/OrderFilterQueries";
import { usePagination } from "@/src/lib/hooks/usePagination";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { AppPages } from "@/src/lib/constants/appPages";
import KumohHead from "@/src/components/shared/layout/head/NextHead.index";

export default function Order() {
  const [tab, onTabClick] = useOrderTab(NEW_ORDER_TAB[0]);
  const filterArgs = useOrderSelectFilter(() => refetch());
  const modalArgs = useOrderModal();

  const { data, refetch } = useQuery({
    queryKey: ["factoryNewOrder", tab.value],
    queryFn:
      tab === NEW_ORDER_TAB[0]
        ? () =>
            OrderApi.GET_FACTORY_NEWISSUE_ORDER(
              paginationArgs.activedPage,
              5,
              filterArgs.filterMap.get(QUOTATION.key)?.at(0) ?? "",
              filterArgs.filterMap.get(CUSTOMER.key)?.at(0) ?? "",
              filterArgs.filterMap.get(ORDER_TYPE.key)?.at(0) ?? "",
            )
        : () =>
            OrderApi.GET_FACTORY_REISSUE_ORDER(
              paginationArgs.activedPage,
              5,
              filterArgs.filterMap.get(QUOTATION.key)?.at(0) ?? "",
              filterArgs.filterMap.get(ORDER_TYPE.key)?.at(0) ?? "",
            ),
  });
  const paginationArgs = usePagination({
    totalPage: data?.totalPages,
    refetch: () => refetch(),
  });

  return (
    <>
      <KumohHead title="신규 거래 목록 | 금오거래센터" />
      <BodyWrapper className="flex-column-center">
        <PageTitle className="bold40">신규 거래 목록</PageTitle>
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
        <OrderPagination {...paginationArgs} />
      </BodyWrapper>
      <OrderModal {...modalArgs} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { cookies } = context.req;

  setSsrAxiosHeader(cookies);
  await queryClient.prefetchQuery({
    queryKey: ["factoryNewOrder", "new-issue"],
    queryFn: () => OrderApi.GET_FACTORY_NEWISSUE_ORDER(1, 5, "", "", ""),
  });

  const queryState = queryClient.getQueryState([
    "factoryNewOrder",
    "new-issue",
  ]);
  if (queryState?.status === "error") {
    return {
      redirect: {
        destination: `${AppPages.LOGIN}?redirect=${encodeURIComponent(
          context.resolvedUrl,
        )}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
