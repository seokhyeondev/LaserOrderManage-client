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
import {
  IDetailCustomer,
  IDetailDrawing,
  IDetailOrder,
  IDetailPurchaseOrder,
  IDetailQuotation,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { IDeliveryAddress } from "@/src/lib/apis/user/customer/Customer.types";
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import { useOrderDetailScroll } from "@/src/lib/hooks/useScroll";

const address: IDeliveryAddress = {
  id: 0,
  name: "회사",
  zipCode: "12345",
  address: "경기도 안산시 단원구 21길",
  detailAddress: "시화공단 234번지",
  receiver: "김우리",
  phone1: "010-0000-0000",
  phone2: null,
  isDefault: true,
};

const drawingList: IDetailDrawing[] = [
  {
    id: 0,
    fileName: "BodyPart.dwg",
    fileSize: "5000",
    fileType: "dwg",
    fileUrl: "www.naver.com",
    thumbnailImgUrl: "/images/netflix.webp",
    count: 4,
    ingredient: "SS",
    thickness: 4,
  },
];

const detailOrder: IDetailOrder = {
  id: 0,
  name: "기계 시스템 제작 프로젝트",
  isUrgent: true,
  stage: "견적 대기",
  manufacturingList: ["레이저 가공", "절삭"],
  postProcessingList: null,
  drawingList: drawingList,
  request: "빨리 부탁드려요",
  deliveryAddress: address,
  createdAt: "2023. 12. 25",
};

const customer: IDetailCustomer = {
  id: 0,
  name: "김우리",
  company: "우리 기술",
  phone: "010-0000-0000",
  email: "wuri001@gmail.com",
};

const quotation: IDetailQuotation = {
  id: 0,
  fileUrl: "www.naver.com",
  totalCost: 1000000,
  deliveryDate: "2023. 12. 08",
  createdAt: "2023. 11. 24",
};

const purchaseOrder: IDetailPurchaseOrder = {
  id: 0,
  inspectionPeriod: "2023. 11. 28",
  inspectionCondition: "발주 조건",
  paymentDate: "2023. 12. 12",
  createdAt: "2023. 11. 28",
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
        <CustomerInfoSection data={customer} />
        <Spacer width="100%" height="60px" />
        <DeliveryInfoSection data={address} />
        <Spacer width="100%" height="60px" />
        <DrawingInfoSection
          sectionRef={scrollArgs.drawingInfoRef}
          data={detailOrder.drawingList}
        />
        <Spacer width="100%" height="60px" />
        <QuotationInfoSection
          sectionRef={scrollArgs.quotationInfoRef}
          data={quotation}
        />
        <Spacer width="100%" height="60px" />
        <PurchaseOrderInfoSection data={purchaseOrder} />
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
