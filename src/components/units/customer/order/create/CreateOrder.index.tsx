import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./CreateOrder.styles";
import CreateOrderMenu from "@/src/components/commons/menu/create/CreateOrderMenu";
import {
  BASIC_INFO,
  DETAIL_INFO,
  DILIVER_INFO,
} from "@/src/components/commons/menu/create/CreateOrderMenu.types";

export default function CreateOrder() {
  return (
    <S.Wrapper>
      <S.BodyWrapper className="flex-row">
        <CreateOrderMenu menus={[BASIC_INFO, DETAIL_INFO, DILIVER_INFO]} />
        <Spacer width="15px" height="100%" />
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
