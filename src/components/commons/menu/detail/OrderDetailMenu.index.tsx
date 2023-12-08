import { FocusableSection } from "@/src/components/units/order/OrderDetail.index";
import * as S from "./OrderDetailMenu.styles";

interface IOrderDetailMenuProps {
  focusedSection: FocusableSection;
  onClickOrderInfo: () => void;
  onClickDrawingInfo: () => void;
  onClickQuotationInfo: () => void;
}

export default function OrderDetailMenu(props: IOrderDetailMenuProps) {
  return (
    <S.Wrapper>
      <S.Label className="bold20">바로가기</S.Label>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "OrderInfo"}
        onClick={props.onClickOrderInfo}
      >
        기본 정보
      </S.MenuItem>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "DrawingInfo"}
        onClick={props.onClickDrawingInfo}
      >
        도면 정보
      </S.MenuItem>
      <S.MenuItem
        className="flex-column"
        isFocus={props.focusedSection === "QuotationInfo"}
        onClick={props.onClickQuotationInfo}
      >
        견적서/발주서
      </S.MenuItem>
    </S.Wrapper>
  );
}
