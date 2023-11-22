import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./CreateOrder.styles";
import CreateOrderMenu from "@/src/components/commons/menu/create/CreateOrderMenu";
import {
  BASIC_INFO,
  DETAIL_INFO,
  DELIVER_INFO,
  DRAWING_INFO,
  REQUEST_INFO,
} from "@/src/components/commons/menu/create/CreateOrderMenu.types";
import { useState } from "react";
import BasicInfo from "./pages/BasicInfo.index";
import RequestInfo from "./pages/RequestInfo.index";
import DeliveryInfo from "./pages/DeliveryInfo.index";
import DrawingInfo from "./pages/DrawingInfo.index";
import { ICreateProgressBar, ISubCreateProgressBar } from "@/src/components/commons/progressbar/create/CreateProgressbar.types";

const CREATE_ORDER_PAGES = [BASIC_INFO, DETAIL_INFO, DELIVER_INFO];

export default function CreateOrder() {
  const [currentPage, setCurrentPage] = useState<ICreateProgressBar>(BASIC_INFO);
  const [currentSubPage, setCurrentSubPage] = useState<ISubCreateProgressBar>({id: 0, title: "empty_menu"});

  const moveNextPage = () => {
    const currentPageId = currentPage.id;

    if(currentPage.subMenus && currentSubPage.id < currentPage.subMenus.length -1) {
        setCurrentSubPage(currentPage.subMenus[currentSubPage.id + 1]);
        return;
    }
    if(currentPageId < CREATE_ORDER_PAGES.length - 1) {
      if(!currentPage.subMenus && CREATE_ORDER_PAGES[currentPageId + 1].subMenus) {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId + 1]);
        setCurrentSubPage(CREATE_ORDER_PAGES[currentPageId + 1].subMenus!![0]);
      } else {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId + 1]);
      }
    };
  }

  const moveBeforePage = () => {
    if(currentPage.subMenus && currentSubPage.id > currentPage.subMenus[0].id) {
      setCurrentSubPage(currentPage.subMenus[currentSubPage.id - 1]);
      return;
    }

    const currentPageId = currentPage.id;
    if(currentPageId > CREATE_ORDER_PAGES[0].id) {
      if(!currentPage.subMenus && CREATE_ORDER_PAGES[currentPageId - 1].subMenus) {
        const beforePageSubMenuLastIndex = CREATE_ORDER_PAGES[currentPageId - 1].subMenus!!.length - 1;
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId - 1]);
        setCurrentSubPage(CREATE_ORDER_PAGES[currentPageId - 1].subMenus!![beforePageSubMenuLastIndex]);
      } else {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId - 1]);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.BodyWrapper className="flex-row">
        <CreateOrderMenu pages={CREATE_ORDER_PAGES} currentPageId={currentPage.id} currentSubPageId={currentSubPage.id}/>
        <Spacer width="15px" height="100%" />
        <S.MainWrapper className="flex-column">
          {currentPage === BASIC_INFO && <BasicInfo onNext={moveNextPage}/>}
          {currentPage ===  DETAIL_INFO && currentSubPage === DRAWING_INFO && (
            <DrawingInfo onNext={moveNextPage} onBefore={moveBeforePage}/>
          )}
          {currentPage === DETAIL_INFO && currentSubPage === REQUEST_INFO && (
            <RequestInfo onNext={moveNextPage} onBefore={moveBeforePage}/>
          )}
          {currentPage === DELIVER_INFO && <DeliveryInfo onBefore={moveBeforePage}/>}
        </S.MainWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
