import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./CreateOrder.styles";
import CreateOrderMenu from "@/src/components/commons/menu/create/CreateOrderMenu";
import {
  BASIC_INFO,
  DETAIL_INFO,
  DELIVERY_INFO,
  DRAWING_INFO,
  REQUEST_INFO,
} from "@/src/components/commons/menu/create/CreateOrderMenu.types";
import { useEffect, useState } from "react";
import BasicInfo from "./pages/BasicInfo.index";
import RequestInfo from "./pages/RequestInfo.index";
import DeliveryInfo from "./pages/DeliveryInfo.index";
import DrawingInfo from "./pages/DrawingInfo.index";
import {
  ICreateProgressBar,
  ISubCreateProgressBar,
} from "@/src/components/commons/progressbar/create/CreateProgressbar.types";
import { CArray } from "@/src/lib/utils/extensions";
import KumohHead from "@/src/components/shared/layout/head/NextHead.index";
import { useResetRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder";

const CREATE_ORDER_PAGES = new CArray(BASIC_INFO, DETAIL_INFO, DELIVERY_INFO);

export default function CreateOrder() {
  const [currentPage, setCurrentPage] =
    useState<ICreateProgressBar>(BASIC_INFO);
  const [currentSubPage, setCurrentSubPage] =
    useState<ISubCreateProgressBar>(DRAWING_INFO);
  const resetOrderState = useResetRecoilState(createOrderState);

  useEffect(() => {
    resetOrderState();
  }, []);

  const moveNextPage = () => {
    if (currentPage.subMenus.isNotEmpty()) {
      const subPageId = currentSubPage.id;
      if (subPageId < currentPage.subMenus.last().id) {
        setCurrentSubPage(currentPage.subMenus[subPageId + 1]);
        return;
      }
    }
    const pageId = currentPage.id;
    if (pageId < CREATE_ORDER_PAGES.last().id) {
      if (
        currentPage.subMenus.isEmpty() &&
        CREATE_ORDER_PAGES[pageId + 1].subMenus.isNotEmpty()
      ) {
        setCurrentPage(CREATE_ORDER_PAGES[pageId + 1]);
        setCurrentSubPage(CREATE_ORDER_PAGES[pageId + 1].subMenus.fisrt());
      } else {
        setCurrentPage(CREATE_ORDER_PAGES[pageId + 1]);
      }
    }
  };

  const movePrevPage = () => {
    if (currentPage.subMenus.isNotEmpty()) {
      const subPageId = currentSubPage.id;
      if (subPageId > currentPage.subMenus.fisrt().id) {
        setCurrentSubPage(currentPage.subMenus[subPageId - 1]);
        return;
      }
    }
    const pageId = currentPage.id;
    if (pageId > CREATE_ORDER_PAGES.fisrt().id) {
      if (
        currentPage.subMenus.isEmpty() &&
        CREATE_ORDER_PAGES[pageId - 1].subMenus.isNotEmpty()
      ) {
        setCurrentPage(CREATE_ORDER_PAGES[pageId - 1]);
        setCurrentSubPage(CREATE_ORDER_PAGES[pageId - 1].subMenus.last());
      } else {
        setCurrentPage(CREATE_ORDER_PAGES[pageId - 1]);
      }
    }
  };

  return (
    <>
      <KumohHead title="견적 요청하기 | 금오거래센터" />
      <S.Wrapper>
        <S.BodyWrapper className="flex-row">
          <CreateOrderMenu
            pages={CREATE_ORDER_PAGES}
            currentPageId={currentPage.id}
            currentSubPageId={currentSubPage ? currentSubPage.id : 0}
          />
          <Spacer width="15px" height="100%" />
          <S.MainWrapper className="flex-column">
            {currentPage === BASIC_INFO && <BasicInfo onNext={moveNextPage} />}
            {currentPage === DETAIL_INFO && currentSubPage === DRAWING_INFO && (
              <DrawingInfo onNext={moveNextPage} onBefore={movePrevPage} />
            )}
            {currentPage === DETAIL_INFO && currentSubPage === REQUEST_INFO && (
              <RequestInfo onNext={moveNextPage} onBefore={movePrevPage} />
            )}
            {currentPage === DELIVERY_INFO && (
              <DeliveryInfo onBefore={movePrevPage} />
            )}
          </S.MainWrapper>
        </S.BodyWrapper>
      </S.Wrapper>
    </>
  );
}
