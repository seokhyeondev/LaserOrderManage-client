import { RefObject, useEffect, useRef, useState } from "react";
import OrderCommentMenu from "../../commons/menu/detail/OrderCommentMenu.index";
import OrderDetailMenu from "../../commons/menu/detail/OrderDetailMenu.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./OrderDetail.styles";
import OrderDetailBottombar from "./bottombar/OrderDetailBottombar.index";
import CustomerInfoSection from "./section/CustomerInfoSection.index";
import DeliveryInfoSection from "./section/DeliveryInfoSection.index";
import DrawingInfoSection from "./section/DrawingInfoSection.index";
import OrderInfoSection from "./section/OrderInfoSection.index";
import PurchaseOrderInfoSection from "./section/PurchaseOrderInfoSection.index";
import QuotationInfoSection from "./section/QuotationInfoSection.index";
import UrgentSection from "./section/UrgentSection.index";
import { IDetailOrder } from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";

export type FocusableSection = "OrderInfo" | "DrawingInfo" | "QuotationInfo";
const focusOffset = 30;

const address: IDeliveryAddress = {
  id: 0,
  name: "회사",
  zipCode: "12345",
  address: "",
  detailAddress: "",
  receiver: "",
  phone1: "",
  phone2: null,
  isDefault: true,
};

const detailOrder: IDetailOrder = {
  id: 0,
  name: "기계 시스템 제작 프로젝트",
  isUrgent: true,
  stage: "견적 대기",
  manufacturingList: ["레이저 가공", "절삭"],
  postProcessingList: null,
  drawingList: [],
  request: "빨리 부탁드려요",
  deliveryAddress: address,
  createdAt: "2023. 12. 25",
};

export default function OrderDetail() {
  const [focusedSection, setFocusedSection] =
    useState<FocusableSection>("OrderInfo");
  const orderInfoRef = useRef<HTMLDivElement>(null);
  const drawingInfoRef = useRef<HTMLDivElement>(null);
  const quotationInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", checkFocus);
    return () => {
      window.removeEventListener("scroll", checkFocus);
    };
  }, []);

  const checkFocus = () => {
    const orderInfoPosition = orderInfoRef.current?.getBoundingClientRect();
    const drawingInfoPosition = drawingInfoRef.current?.getBoundingClientRect();
    const quotationInfoPosition =
      quotationInfoRef.current?.getBoundingClientRect();
    if (
      orderInfoPosition &&
      orderInfoPosition.top - focusOffset <= 0 &&
      orderInfoPosition.bottom > 0
    ) {
      setFocusedSection("OrderInfo");
    } else if (
      drawingInfoPosition &&
      drawingInfoPosition.top - focusOffset <= 0 &&
      drawingInfoPosition.bottom > 0
    ) {
      setFocusedSection("DrawingInfo");
    } else if (
      quotationInfoPosition &&
      quotationInfoPosition.top - focusOffset <= 0 &&
      quotationInfoPosition.bottom > 0
    ) {
      setFocusedSection("QuotationInfo");
    }
  };

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current ? ref.current.offsetTop - focusOffset : undefined,
      behavior: "smooth",
    });
  };

  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper>
        <OrderInfoSection sectionRef={orderInfoRef} data={detailOrder} />
        <Spacer width="100%" height="48px" />
        <UrgentSection />
        <Spacer width="100%" height="60px" />
        <CustomerInfoSection />
        <Spacer width="100%" height="60px" />
        <DeliveryInfoSection />
        <Spacer width="100%" height="60px" />
        <DrawingInfoSection sectionRef={drawingInfoRef} />
        <Spacer width="100%" height="60px" />
        <QuotationInfoSection sectionRef={quotationInfoRef} />
        <Spacer width="100%" height="60px" />
        <PurchaseOrderInfoSection />
      </S.BodyWrapper>
      <S.MenuWrapper>
        <OrderDetailMenu
          focusedSection={focusedSection}
          onClickOrderInfo={() => scrollToSection(orderInfoRef)}
          onClickDrawingInfo={() => scrollToSection(drawingInfoRef)}
          onClickQuotationInfo={() => scrollToSection(quotationInfoRef)}
        />
        <Spacer width="100%" height="10px" />
        <OrderCommentMenu />
      </S.MenuWrapper>
      <OrderDetailBottombar />
    </S.Wrapper>
  );
}
