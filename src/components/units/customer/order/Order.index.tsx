import OrderFilter from "@/src/components/commons/filters/order/OrderFilter.index";
import OrderSearchbar from "@/src/components/commons/searchbars/order/OrderSearchbar.index";
import { BodyWrapper } from "@/src/components/commons/wrapper/BodyWrapper.styles";
import CustomerOrderList from "./List/OrderList.index";
import OrderModal from "@/src/components/commons/modal/order/OrderModal.index";
import {
  MANUFACTURING,
  STAGE,
} from "@/src/components/commons/filters/order/OrderFilterQueries";
import { useOrderFilter } from "@/src/lib/hooks/useFilter";
import OrderPagination from "@/src/components/commons/paginations/order/OrderPagination.index";
import { useSearchbar } from "@/src/lib/hooks/useSearchBar";
import { useOrderModal } from "@/src/lib/hooks/useModal";
import { usePagination } from "@/src/lib/hooks/usePagination";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";

export default function Order() {
  const searchBarArgs = useSearchbar(() => refetch());
  const filterArgs = useOrderFilter(() => refetch());
  const orderModalArgs = useOrderModal();

  const { data, refetch } = useQuery({
    queryKey: ["customerOrder"],
    queryFn: () =>
      OrderApi.GET_CUSTOMER_ORDER(
        paginationArgs.activedPage,
        5,
        filterArgs.filterMap.get(STAGE.key)?.join(",") ?? "",
        filterArgs.filterMap.get(MANUFACTURING.key)?.join(",") ?? "",
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
        <p className="page-title">거래 목록</p>
        <OrderSearchbar
          placeholder="거래 이름으로 검색하기"
          {...searchBarArgs}
        />
        <OrderFilter filterGroups={[STAGE, MANUFACTURING]} {...filterArgs} />
        {data && (
          <CustomerOrderList
            data={data}
            onOpenModal={orderModalArgs.onOpenWithContent}
          />
        )}
        <OrderPagination {...paginationArgs} />
      </BodyWrapper>
      <OrderModal {...orderModalArgs} />
    </>
  );
}
