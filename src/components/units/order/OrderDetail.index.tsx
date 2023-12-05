import { useEffect } from "react";
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
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import { useOrderDetailScroll } from "@/src/lib/hooks/useScroll";

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
  const auth = useRecoilValue(authState);
  const scrollArgs = useOrderDetailScroll();

  useEffect(() => {
    window.addEventListener("scroll", scrollArgs.checkFocus);
    return () => {
      window.removeEventListener("scroll", scrollArgs.checkFocus);
    };
  }, []);

  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper>
        <OrderInfoSection
          sectionRef={scrollArgs.orderInfoRef}
          data={detailOrder}
        />
        {auth.role === "ROLE_FACTORY" && (
          <>
            <Spacer width="100%" height="48px" />
            <UrgentSection isUrgent={detailOrder.isUrgent} />
          </>
        )}
        <Spacer width="100%" height="60px" />
        <CustomerInfoSection />
        <Spacer width="100%" height="60px" />
        <DeliveryInfoSection />
        <Spacer width="100%" height="60px" />
        <DrawingInfoSection sectionRef={scrollArgs.drawingInfoRef} />
        <Spacer width="100%" height="60px" />
        <QuotationInfoSection sectionRef={scrollArgs.quotationInfoRef} />
        <Spacer width="100%" height="60px" />
        <PurchaseOrderInfoSection />
      </S.BodyWrapper>
      <S.MenuWrapper>
        <OrderDetailMenu
          focusedSection={scrollArgs.focusedSection}
          onClickOrderInfo={() =>
            scrollArgs.scrollToSection(scrollArgs.orderInfoRef)
          }
          onClickDrawingInfo={() =>
            scrollArgs.scrollToSection(scrollArgs.drawingInfoRef)
          }
          onClickQuotationInfo={() =>
            scrollArgs.scrollToSection(scrollArgs.quotationInfoRef)
          }
        />
        <Spacer width="100%" height="10px" />
        <OrderCommentMenu />
      </S.MenuWrapper>
      <OrderDetailBottombar />
    </S.Wrapper>
  );
}
