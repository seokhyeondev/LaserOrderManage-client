import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import {
  BodyWrapper,
  FlexGrow,
  PageTitle,
} from "@/src/components/commons/wrapper/BodyWrapper.styles";
import FactoryOrderList from "./List/OrderList.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useSearchbar } from "@/src/lib/hooks/useSearchBar";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import { getParamDate } from "@/src/lib/utils/utils";
import { usePagination } from "@/src/lib/hooks/usePagination";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { AppPages } from "@/src/lib/constants/appPages";
import KumohHead from "@/src/components/shared/layout/head/NextHead.index";
import FactoryOrderFilter from "@/src/components/commons/filters/factory/FactoryOrderFilter.index";
import { useFactoryOrderFilter } from "@/src/lib/hooks/useFilter";

export default function Order() {
  const searchBarArgs = useSearchbar(() => refetch());
  const filterArgs = useFactoryOrderFilter();
  const modalArgs = useOrderModal();
  const [tab, onTabClick] = useOrderTab("진행중", filterArgs.onResetFilter);

  const { data, refetch } = useQuery({
    queryKey: [
      "factoryOrder",
      tab,
      filterArgs.orderType,
      filterArgs.dateFieldChanged && filterArgs.dateFieldFilled === 3,
    ],
    queryFn: () =>
      OrderApi.GET_FACTORY_ORDER(
        paginationArgs.activedPage,
        5,
        tab === "완료",
        filterArgs.orderType ?? "",
        filterArgs.dateType ?? "",
        getParamDate(filterArgs.startDate),
        getParamDate(filterArgs.endDate),
        searchBarArgs.keyword,
      ),
  });
  const paginationArgs = usePagination({
    totalPage: data?.totalPages,
    refetch: () => refetch(),
  });

  return (
    <>
      <KumohHead title="거래 내역 | 금오거래센터" />
      <BodyWrapper className="flex-column-center">
        <PageTitle className="bold40">거래 내역</PageTitle>
        <OrderTab
          tabs={["진행중", "완료"]}
          selectedTab={tab}
          onTabClick={onTabClick}
        />
        <OrderSearchbar
          placeholder="업체, 담당자, 거래 이름으로 검색하기"
          {...searchBarArgs}
        />
        <FactoryOrderFilter {...filterArgs} />
        {data && (
          <FactoryOrderList
            data={data}
            onOpenModal={modalArgs.onOpenWithContent}
          />
        )}
        <FlexGrow />
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
    queryKey: ["factoryOrder", "진행중", null, false],
    queryFn: () => OrderApi.GET_FACTORY_ORDER(1, 5, false, "", "", "", "", ""),
  });

  const queryState = queryClient.getQueryState([
    "factoryOrder",
    "진행중",
    null,
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
