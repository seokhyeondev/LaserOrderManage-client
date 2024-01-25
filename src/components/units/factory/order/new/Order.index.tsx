import OrderTab from "@/src/components/commons/tabs/order/OrderTab.index";
import {
  BodyWrapper,
  FlexGrow,
  PageTitle,
} from "@/src/components/commons/wrapper/BodyWrapper.styles";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import { useOrderTab } from "@/src/lib/hooks/useTab";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import FactoryNewOrderList from "./List/OrderList.index";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import { usePagination } from "@/src/lib/hooks/usePagination";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { AppPages } from "@/src/lib/constants/appPages";
import KumohHead from "@/src/components/shared/layout/head/NextHead.index";
import { useState } from "react";
import FactoryNewOrderFilter from "@/src/components/commons/filters/factory/FactoryNewOrderFilter.index";

export default function Order() {
  const modalArgs = useOrderModal();
  const [quotationType, setQuotationType] = useState<boolean | null>(null);
  const [customerType, setCustomerType] = useState<boolean | null>(null);
  const [orderType, setOrderType] = useState<boolean | null>(null);

  const onQuotationType = (type: boolean) => {
    if (type !== quotationType) {
      setQuotationType(type);
    }
  };

  const onCustomerType = (type: boolean) => {
    if (type !== customerType) {
      setCustomerType(type);
    }
  };

  const onOrderType = (type: boolean) => {
    if (type !== orderType) {
      setOrderType(type);
    }
  };

  const onResetFilter = () => {
    setQuotationType(null);
    setCustomerType(null);
    setOrderType(null);
  };

  const [tab, onTabClick] = useOrderTab("신규 발행", onResetFilter);

  const { data, refetch } = useQuery({
    queryKey: ["factoryNewOrder", tab, quotationType, customerType, orderType],
    queryFn:
      tab === "신규 발행"
        ? () =>
            OrderApi.GET_FACTORY_NEWISSUE_ORDER(
              paginationArgs.activedPage,
              5,
              quotationType ?? "",
              customerType ?? "",
              orderType ?? "",
            )
        : () =>
            OrderApi.GET_FACTORY_REISSUE_ORDER(
              paginationArgs.activedPage,
              5,
              quotationType ?? "",
              orderType ?? "",
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
          tabs={["신규 발행", "재발행"]}
          selectedTab={tab}
          onTabClick={onTabClick}
        />
        <FactoryNewOrderFilter
          tab={tab}
          quotationType={quotationType}
          customerType={customerType}
          orderType={orderType}
          onQuotationType={onQuotationType}
          onCustomerType={onCustomerType}
          onOrderType={onOrderType}
          onResetFilter={onResetFilter}
        />
        {data && (
          <FactoryNewOrderList
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
    queryKey: ["factoryNewOrder", "신규 발행", "", "", ""],
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
