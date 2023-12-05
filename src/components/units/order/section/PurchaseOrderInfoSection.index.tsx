import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import styled from "@emotion/styled";

export default function PurchaseOrderInfoSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">발주서</S.Title>
        <S.EditBox className="flex-row">
          <EditIcon size={20} />
          <Spacer width="5px" height="100%" />
          <S.EditBoxText className="regular16">
            발주서 추가/수정하기
          </S.EditBoxText>
        </S.EditBox>
      </S.TitleWrapper>
      <S.Section className="flex-row">
        <PurchaseOrder className="regular16">검수 조건입니다.</PurchaseOrder>
        <S.SideWrapper>
          <S.SideBox>
            <S.SideLabel className="regular14">발행 일자</S.SideLabel>
            <S.SideContent className="regular14">2023. 11. 27</S.SideContent>
          </S.SideBox>
          <S.SideBox>
            <S.SideLabel className="regular14">검수 기간</S.SideLabel>
            <S.SideContent className="regular14">2023. 12. 24</S.SideContent>
          </S.SideBox>
          <S.SideBox>
            <S.SideLabel className="regular14">지급 일자</S.SideLabel>
            <S.SideContent className="bold16">2024. 01. 04</S.SideContent>
          </S.SideBox>
        </S.SideWrapper>
      </S.Section>
    </S.Wrapper>
  );
}

const PurchaseOrder = styled.p`
  flex-grow: 1;
  padding-block: 24px;
  padding-right: 24px;
`;
