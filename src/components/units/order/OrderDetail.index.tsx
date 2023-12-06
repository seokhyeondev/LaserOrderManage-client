import { useEffect, useState } from "react";
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
import { OrderStatus } from "@/src/lib/apis/order/Order.types";
import { useToastify } from "@/src/lib/hooks/useToastify";

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
    fileUrl: "https://ordermanage.s3.ap-northeast-2.amazonaws.com/test.dwg",
    thumbnailUrl:
      "https://ordermanage.s3.ap-northeast-2.amazonaws.com/output.png",
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
  manufacturingList: ["bending", "laser-cutting"],
  postProcessingList: ["painting", "plating"],
  drawingList: drawingList,
  request: "빨리 부탁드려요",
  deliveryAddress: address,
  createdAt: "2023-10-12T10:20:30",
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
  fileUrl: "https://ordermanage.s3.ap-northeast-2.amazonaws.com/quotation.pdf",
  totalCost: 1000000,
  deliveryDate: "2023-10-19",
  createdAt: "2023-10-12T10:20:30",
};

const purchaseOrder: IDetailPurchaseOrder = {
  id: 0,
  inspectionPeriod: "2023-11-28",
  inspectionCondition: "발주 조건",
  paymentDate: "2023-10-19",
  createdAt: "2023-10-12T10:20:30",
};

export default function OrderDetail() {
  const auth = useRecoilValue(authState);
  const scrollArgs = useOrderDetailScroll();
  const [status, setStatus] = useState<OrderStatus>(detailOrder.stage);
  const { setToast } = useToastify();

  const onChangeStatus = (nextStatus: OrderStatus, message: string) => {
    setStatus(nextStatus);
    setToast({ comment: message });
  };

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
          status={status}
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
      {/* 견적 승인하기, 고객이 견적서를 확인하고 클릭 -> 견적 대기 -> 견적 승인 */}
      <OrderDetailBottombar
        showCondition={auth.role === "ROLE_CUSTOMER" && status === "견적 대기"}
        announce="견적서를 확인하고 승인해주세요"
        buttonText="견적 승인하기"
        onButton={() => onChangeStatus("견적 승인", "견적서를 승인했어요")}
      />
      {/* 발주 승인하기, 회사가 발주서를 확인하고 클릭 -> 견적 승인 -> 제작 중 */}
      <OrderDetailBottombar
        showCondition={auth.role === "ROLE_FACTORY" && status === "견적 승인"}
        announce="발주서를 확인하고 제작을 시작해주세요"
        buttonText="발주 승인하기"
        onButton={() => onChangeStatus("제작 중", "발주서를 승인했어요")}
      />
      {/* 제작 완료, 회사가 제작을 마치고 클릭 -> 제작 중 -> 배송 중 */}
      <OrderDetailBottombar
        showCondition={auth.role === "ROLE_FACTORY" && status === "제작 중"}
        announce="제작이 끝났다면 배송을 시작해주세요"
        buttonText="제작 완료"
        onButton={() => onChangeStatus("배송 중", "제작이 완료됐어요")}
      />
      {/* 배송 완료, 고객이 배송을 받았다면 클릭 -> 배송 중 -> 거래 완료 */}
      <OrderDetailBottombar
        showCondition={auth.role === "ROLE_CUSTOMER" && status === "배송 중"}
        announce="상품이 잘 도착했나요?"
        buttonText="배송 완료"
        onButton={() => onChangeStatus("거래 완료", "거래가 완료됐어요")}
      />
    </S.Wrapper>
  );
}
