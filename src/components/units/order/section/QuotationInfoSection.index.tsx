import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import styled from "@emotion/styled";

export default function QuotationInfoSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">견적서</S.Title>
        <S.EditBox className="flex-row">
          <EditIcon size={20} />
          <Spacer width="5px" height="100%" />
          <S.EditBoxText className="regular16">
            견적서 추가/수정하기
          </S.EditBoxText>
        </S.EditBox>
      </S.TitleWrapper>
      <S.Section className="flex-row">
        <QuotationName className="medium20 flex-column">
          기계 시스템 제작 프로젝트 견적서.xlsx
        </QuotationName>
        <S.SideWrapper>
          <S.SideBox>
            <S.SideLabel className="regular14">발행 일자</S.SideLabel>
            <S.SideContent className="regular14">2023. 11. 27</S.SideContent>
          </S.SideBox>
          <S.SideBox>
            <S.SideLabel className="regular14">납기일</S.SideLabel>
            <S.SideContent className="regular14">2023. 12. 24</S.SideContent>
          </S.SideBox>
          <S.SideBox>
            <S.SideLabel className="regular14">총 견적 비용</S.SideLabel>
            <S.SideContent className="bold16">12,000,000 원</S.SideContent>
          </S.SideBox>
        </S.SideWrapper>
      </S.Section>
    </S.Wrapper>
  );
}

const QuotationName = styled.p`
  width: 100%;
  flex-grow: 1;
  text-decoration: underline;
  cursor: pointer;
`;
