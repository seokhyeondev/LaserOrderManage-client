import OrderDetailMenu from "../../commons/menu/detail/OrderDetailMenu.index";
import * as S from "./OrderDetail.styles";

export default function OrderDetail() {
  return (
    <S.Wrapper className="flex-row">
      <S.BodyWrapper></S.BodyWrapper>
      <S.MenuWrapper>
        <OrderDetailMenu />
      </S.MenuWrapper>
      <S.BottomBarWrapper></S.BottomBarWrapper>
    </S.Wrapper>
  );
}
