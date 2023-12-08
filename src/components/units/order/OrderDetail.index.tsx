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
import { useRecoilValue } from "recoil";
import { authState } from "@/src/store/auth";
import { useOrderDetailScroll } from "@/src/lib/hooks/useScroll";
import { OrderStatus } from "@/src/lib/apis/order/Order.types";
import { useToastify } from "@/src/lib/hooks/useToastify";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";

export default function OrderDetail() {
  const router = useRouter();
  const { orderId } = router.query;
  const auth = useRecoilValue(authState);
  const [status, setStatus] = useState<OrderStatus>();
  const scrollArgs = useOrderDetailScroll();
  const { setToast } = useToastify();

  useEffect(() => {
    window.addEventListener("scroll", scrollArgs.checkFocus);
    return () => {
      window.removeEventListener("scroll", scrollArgs.checkFocus);
    };
  }, []);

  const { data, isSuccess } = useQuery({
    queryKey: [`orderDetail/${orderId}`],
    queryFn: () => OrderApi.GET_ORDER_DETAIL(String(orderId)),
  });

  useEffect(() => {
    if (data) {
      setStatus(data.order.stage);
    }
  }, [isSuccess]);

  const onChangeStatus = (nextStatus: OrderStatus, message: string) => {
    setStatus(nextStatus);
    setToast({ comment: message });
  };

  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper>
        {data && (
          <>
            <OrderInfoSection
              sectionRef={scrollArgs.orderInfoRef}
              data={data.order}
              status={status}
            />
            {auth.role === "ROLE_FACTORY" && (
              <>
                <Spacer width="100%" height="48px" />
                <UrgentSection isUrgent={data.order.isUrgent} />
              </>
            )}
            <Spacer width="100%" height="60px" />
            <CustomerInfoSection data={data.customer} />
            <Spacer width="100%" height="60px" />
            <DeliveryInfoSection
              data={data.order.deliveryAddress}
              role={auth.role}
              status={status}
            />
            <Spacer width="100%" height="60px" />
            <DrawingInfoSection
              sectionRef={scrollArgs.drawingInfoRef}
              data={data.order.drawingList}
              role={auth.role}
              status={status}
            />
            <Spacer width="100%" height="60px" />
            <QuotationInfoSection
              sectionRef={scrollArgs.quotationInfoRef}
              data={data.quotation}
              role={auth.role}
              status={status}
            />
            <Spacer width="100%" height="60px" />
            <PurchaseOrderInfoSection
              data={data.purchaseOrder}
              role={auth.role}
              status={status}
            />
          </>
        )}
      </S.BodyWrapper>
      <S.MenuWrapper
        className="flex-column-start"
        expanded={scrollArgs.menuExpanded}
      >
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
        <OrderCommentMenu
          expanded={scrollArgs.menuExpanded}
          orderId={String(orderId)}
        />
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
