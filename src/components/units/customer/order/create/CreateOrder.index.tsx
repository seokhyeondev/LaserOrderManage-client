import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./CreateOrder.styles";
import CreateOrderMenu from "@/src/components/commons/menu/create/CreateOrderMenu";
import {
  BASIC_INFO,
  DETAIL_INFO,
  DILIVER_INFO,
} from "@/src/components/commons/menu/create/CreateOrderMenu.types";
import BasicInfo from "./pages/BasicInfo.index";
import { useState } from "react";

export default function CreateOrder() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <S.Wrapper>
      <S.BodyWrapper className="flex-row">
        <CreateOrderMenu menus={[BASIC_INFO, DETAIL_INFO, DILIVER_INFO]} />
        <Spacer width="15px" height="100%" />
        <S.MainWrapper className="flex-column">
          {currentPage === 0 && (
            <>
              <S.LoadWrapper className="flex-row-between-center">
                <S.LoadInfoWrapper className="flex-column-between">
                  <p className="bold24">거래 불러오기</p>
                  <p className="medium20">
                    이전에 진행했던 거래 내역 정보를 불러옵니다.
                  </p>
                </S.LoadInfoWrapper>
                <S.LoadButton className="bold18">불러오기</S.LoadButton>
              </S.LoadWrapper>
              <Spacer width="100%" height="15px" />
            </>
          )}
          <BasicInfo />
        </S.MainWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
