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

export default function OrderDetail() {
  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper>
        <OrderInfoSection />
        <Spacer width="100%" height="48px" />
        <UrgentSection />
        <Spacer width="100%" height="60px" />
        <CustomerInfoSection />
        <Spacer width="100%" height="60px" />
        <DeliveryInfoSection />
        <Spacer width="100%" height="60px" />
        <DrawingInfoSection />
        <Spacer width="100%" height="60px" />
        <QuotationInfoSection />
        <Spacer width="100%" height="60px" />
        <PurchaseOrderInfoSection />
      </S.BodyWrapper>
      <S.MenuWrapper>
        <OrderDetailMenu />
        <Spacer width="100%" height="10px" />
        <OrderCommentMenu />
      </S.MenuWrapper>
      <OrderDetailBottombar />
    </S.Wrapper>
  );
}
