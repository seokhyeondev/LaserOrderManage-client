import { FocusableSection } from "@/src/components/units/order/section/DetailSection.types";
import { RefObject, useRef, useState } from "react";

export const useOrderDetailScroll = () => {
  const [focusedSection, setFocusedSection] =
    useState<FocusableSection>("OrderInfo");
  const [menuExpanded, setMenuExpanded] = useState(false);
  const orderInfoRef = useRef<HTMLDivElement>(null);
  const drawingInfoRef = useRef<HTMLDivElement>(null);
  const quotationInfoRef = useRef<HTMLDivElement>(null);
  const focusOffset = 30;

  const checkFocus = () => {
    const orderInfoPosition = orderInfoRef.current?.getBoundingClientRect();
    const drawingInfoPosition = drawingInfoRef.current?.getBoundingClientRect();
    const quotationInfoPosition =
      quotationInfoRef.current?.getBoundingClientRect();

    if (orderInfoPosition) {
      setMenuExpanded(orderInfoPosition.top < 0);
    }
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

  return {
    focusedSection,
    menuExpanded,
    orderInfoRef,
    drawingInfoRef,
    quotationInfoRef,
    checkFocus,
    scrollToSection,
  } as const;
};
