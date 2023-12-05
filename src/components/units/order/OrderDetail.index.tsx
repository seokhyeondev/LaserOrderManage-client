import OrderCommentMenu from "../../commons/menu/detail/OrderCommentMenu.index";
import OrderDetailMenu from "../../commons/menu/detail/OrderDetailMenu.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./OrderDetail.styles";
import OrderInfoSection from "./section/OrderInfoSection.index";

export default function OrderDetail() {
  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper>
        <OrderInfoSection />
      </S.BodyWrapper>
      <S.MenuWrapper>
        <OrderDetailMenu />
        <Spacer width="100%" height="10px" />
        <OrderCommentMenu />
      </S.MenuWrapper>
      <S.BottomBarWrapper></S.BottomBarWrapper>
    </S.Wrapper>
  );
}
