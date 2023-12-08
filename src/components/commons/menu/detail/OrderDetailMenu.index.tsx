import { FocusableSection } from "@/src/components/units/order/section/DetailSection.types";
import * as S from "./OrderDetailMenu.styles";

interface IOrderDetailMenuProps {
  focusedSection: FocusableSection;
  onOrderInfo: () => void;
  onDrawingInfo: () => void;
  onQuotationInfo: () => void;
}

export default function OrderDetailMenu(props: IOrderDetailMenuProps) {
  return (
    <S.Wrapper>
      <S.Label className="bold20">바로가기</S.Label>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "OrderInfo"}
        onClick={props.onOrderInfo}
      >
        기본 정보
      </S.MenuItem>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "DrawingInfo"}
        onClick={props.onDrawingInfo}
      >
        도면 정보
      </S.MenuItem>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "QuotationInfo"}
        onClick={props.onQuotationInfo}
      >
        견적서/발주서
      </S.MenuItem>
    </S.Wrapper>
  );
}
