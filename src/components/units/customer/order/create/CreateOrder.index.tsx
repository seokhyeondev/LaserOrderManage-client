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
import { first, last } from "@/src/lib/utils/extensions";

const CREATE_ORDER_PAGES = [BASIC_INFO, DETAIL_INFO, DELIVER_INFO];

export default function CreateOrder() {
  const [currentPage, setCurrentPage] = useState<ICreateProgressBar>(BASIC_INFO);
  const [currentSubPage, setCurrentSubPage] = useState<ISubCreateProgressBar>({id: 0, title: "empty_menu"});

  const moveNextPage = () => {
    const currentPageId = currentPage.id;

    if(currentPage.subMenus && currentSubPage.id < last(currentPage.subMenus)!!.id) {
        setCurrentSubPage(currentPage.subMenus[currentSubPage.id + 1]);
        return;
    }
    if(currentPageId < last(CREATE_ORDER_PAGES)!!.id) {
      if(!currentPage.subMenus && CREATE_ORDER_PAGES[currentPageId + 1].subMenus) {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId + 1]);
        setCurrentSubPage(first(CREATE_ORDER_PAGES[currentPageId + 1].subMenus!!)!!);
      } else {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId + 1]);
      }
    };
  }

  const moveBeforePage = () => {
    if(currentPage.subMenus && currentSubPage.id > first(currentPage.subMenus)!!.id) {
      setCurrentSubPage(currentPage.subMenus[currentSubPage.id - 1]);
      return;
    }

    const currentPageId = currentPage.id;
    if(currentPageId > first(CREATE_ORDER_PAGES)!!.id) {
      if(!currentPage.subMenus && CREATE_ORDER_PAGES[currentPageId - 1].subMenus) {
        setCurrentPage(CREATE_ORDER_PAGES[currentPageId - 1]);
        setCurrentSubPage(last(CREATE_ORDER_PAGES[currentPageId - 1].subMenus!!)!!);
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
