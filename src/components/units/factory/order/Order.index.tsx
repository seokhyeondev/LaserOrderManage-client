import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import { ORDER_TAB } from "@/src/components/commons/tabs/order/OrderTabQueries";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import FactoryOrderList from "./List/OrderList.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import OrderFilterWithDate from "@/src/components/commons/filters/order/OrderFilterWithDate.index";
import { useOrderSelectFilter } from "@/src/lib/hooks/useFilter";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useSearchbar } from "@/src/lib/hooks/useSearchBar";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import { ORDER_TYPE } from "@/src/components/commons/filters/order/OrderFilterQueries";
import { useOrderDate } from "@/src/lib/hooks/useDate";
import { getParamDate } from "@/src/lib/utils/utils";
import { usePagination } from "@/src/lib/hooks/usePagination";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";

export default function Order() {
  const [tab, onTabClick] = useOrderTab(ORDER_TAB[0]);
  const searchBarArgs = useSearchbar(() => refetch());
  const filterArgs = useOrderSelectFilter(() => refetch());
  const dateArgs = useOrderDate(filterArgs.onResetFilter);
  const modalArgs = useOrderModal();

  const { data, refetch } = useQuery({
    queryKey: ["factoryOrder", tab.value],
    queryFn: () =>
      OrderApi.GET_FACTORY_ORDER(
        paginationArgs.activedPage,
        5,
        tab.value,
        filterArgs.filterMap.get(ORDER_TYPE.key)?.at(0) ?? "",
        dateArgs.dateFilter?.value ?? "",
        getParamDate(dateArgs.startDate),
        getParamDate(dateArgs.endDate),
        searchBarArgs.keyword,
      ),
  });
  const paginationArgs = usePagination({
    totalPage: data?.totalPages,
    refetch: () => refetch(),
  });

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
          {...filterArgs}
          {...dateArgs}
          filterGroups={tab.filterGroups}
          onResetFilter={dateArgs.onResetFilterWithDate}
        />
        {data && (
          <FactoryOrderList
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
  const queryClinet = new QueryClient();
  const { cookies } = context.req;
  try {
    setSsrAxiosHeader(cookies);
    await queryClinet.prefetchQuery({
      queryKey: ["factoryOrder", "false"],
      queryFn: () =>
        OrderApi.GET_FACTORY_ORDER(1, 5, "false", "", "", "", "", ""),
    });
    return {
      props: {
        dehydratedState: dehydrate(queryClinet),
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};
