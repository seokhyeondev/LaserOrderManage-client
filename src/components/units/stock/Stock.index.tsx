import { useState } from "react";
import * as S from "./Stock.style";
import { useOrderDetailScroll } from "@/src/lib/hooks/useScroll";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";
import { GetServerSideProps } from "next";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { AppPages } from "@/src/lib/constants/appPages";
import KumohHead from "../../shared/layout/head/NextHead.index";
import StockStatus from "./section/Status.index";
import StockAnalyzeFilter from "../../commons/filters/stock/StockAnalyze.index";
import StockAnalyze from "./section/Analyze.index";

const TABS = ["status", "analyze"] as const;
export default function Stock() {
  const router = useRouter();
  const { orderId } = router.query;
  const scrollArgs = useOrderDetailScroll();
  const { data, isSuccess } = useQuery({
    queryKey: [`orderDetail/${orderId}`],
    queryFn: () => OrderDetailApi.GET_ORDER_DETAIL(String(orderId)),
  });
  const [currentTab, setCurrentTab] = useState<"status" | "analyze">("status");
  const [currentOrderId, setCurrentOrderId] = useState<
    string | null | undefined
  >(undefined);

  return (
    <>
      <KumohHead title={""} />
      <S.Wrapper ref={scrollArgs.pageRef}>
        <S.HeaderWrapper>
          <h1>자제 재고 관리</h1>
          <S.TabWrapper>
            {TABS.map((tab) => (
              <S.Tab
                key={tab}
                isActived={currentTab === tab}
                onClick={() => setCurrentTab(tab)}
              >
                {tab === "status" ? "재고 현황" : "재고 분석"}
              </S.Tab>
            ))}
          </S.TabWrapper>
        </S.HeaderWrapper>
        {currentTab === "status" ? <StockStatus /> : <StockAnalyze />}
      </S.Wrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { cookies } = context.req;
  const { orderId } = context.params as unknown as { orderId: string };

  setSsrAxiosHeader(cookies);
  await queryClient.prefetchQuery({
    queryKey: [`orderDetail/${orderId}`],
    queryFn: () => OrderDetailApi.GET_ORDER_DETAIL(orderId),
  });
  await queryClient.prefetchQuery({
    queryKey: [`orderDetailComments/${orderId}`],
    queryFn: () => OrderDetailApi.GET_ORDER_COMMENTS(orderId),
  });

  const queryState = queryClient.getQueryState([`orderDetail/${orderId}`]);
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
