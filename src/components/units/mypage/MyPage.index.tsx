import styled from "@emotion/styled";
import MyPageMenu from "@/src/components/commons/menu/mypage/MyPageMenu.index";
import { useState } from "react";
import { IMyPageMenu } from "@/src/components/commons/menu/mypage/MyPageMenu.types";
import { useRecoilValue } from "recoil";
import { UserType, authState } from "@/src/store/auth";
import AccountPage from "./pages/AccoutPage.index";
import DeliveryPage from "./pages/DeliveryPage.index";
import ManagerListPage from "./pages/MangerListPage.index";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { setSsrAxiosHeader } from "@/src/lib/utils/setSsrAxiosHeader";
import { CustomerApi } from "@/src/lib/apis/user/customer/CustomerApi";
import { FactoryApi } from "@/src/lib/apis/user/factory/FactoryApi";

export default function MyPage() {
  const [currentPage, setCurrentPage] = useState<IMyPageMenu>("Account");
  const auth = useRecoilValue(authState);

  const onChangePage = (page: IMyPageMenu) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <Wrapper className="flex-row">
      <MyPageMenu
        currentPage={currentPage}
        role={auth.role}
        onChangePage={onChangePage}
      />
      {currentPage === "Account" && <AccountPage role={auth.role} />}
      {currentPage === "Delivery" && <DeliveryPage />}
      {currentPage === "MangerList" && <ManagerListPage />}
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { cookies } = context.req;
  const role = cookies.role as UserType;

  setSsrAxiosHeader(cookies);
  if (role === "ROLE_CUSTOMER") {
    await queryClient.prefetchQuery({
      queryKey: ["customerAccount"],
      queryFn: () => CustomerApi.GET_ACCOUNT_INFO(),
    });
    await queryClient.prefetchQuery({
      queryKey: ["getDeliveryAddress"],
      queryFn: () => CustomerApi.GET_DELIVERY_ADDRESS(),
    });
    const queryState = queryClient.getQueryState(["customerAccount"]);
    if (queryState?.status === "error") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }

  if (role === "ROLE_FACTORY") {
    await queryClient.prefetchQuery({
      queryKey: ["factoryAccount"],
      queryFn: () => FactoryApi.GET_ACCOUNT_INFO(),
    });
    await queryClient.prefetchQuery({
      queryKey: ["getManagers"],
      queryFn: () => FactoryApi.GET_ORDER_MANAGER(),
    });
    const queryState = queryClient.getQueryState(["factoryAccount"]);
    if (queryState?.status === "error") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightGray);
`;
