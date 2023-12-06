import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import styled from "@emotion/styled";
import { getDate } from "@/src/lib/utils/utils";
import { IPurchaseOrderInfoSectionProps } from "./DetailSection.types";

export default function PurchaseOrderInfoSection({
  data,
  role,
  status,
}: IPurchaseOrderInfoSectionProps) {
  const onEditPurchaseOrder = () => {};
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">발주서</S.Title>
        {role === "ROLE_CUSTOMER" && status === "견적 승인" && (
          <S.EditBox className="flex-row" onClick={onEditPurchaseOrder}>
            <EditIcon size={20} />
            <Spacer width="5px" height="100%" />
            <S.EditBoxText className="regular16">
              발주서 추가/수정하기
            </S.EditBoxText>
          </S.EditBox>
        )}
      </S.TitleWrapper>
      <S.Section className="flex-row">
        {data === null ? (
          <EmptyPurchaseOrder className="regular16 flex-center">
            {role === "ROLE_CUSTOMER" && status === "견적 승인"
              ? "발주서를 추가해주세요"
              : "아직 발주서가 등록되지 않았어요"}
          </EmptyPurchaseOrder>
        ) : (
          <>
            <PurchaseOrder className="regular16">
              {data.inspectionCondition}
            </PurchaseOrder>
            <S.SideWrapper>
              <S.SideBox>
                <S.SideLabel className="regular14">발행 일자</S.SideLabel>
                <S.SideContent className="regular14">
                  {getDate(data.createdAt)}
                </S.SideContent>
              </S.SideBox>
              <S.SideBox>
                <S.SideLabel className="regular14">검수 기간</S.SideLabel>
                <S.SideContent className="regular14">{`~ ${getDate(
                  data.inspectionPeriod,
                )}`}</S.SideContent>
              </S.SideBox>
              <S.SideBox>
                <S.SideLabel className="regular14">지급 일자</S.SideLabel>
                <S.SideContent className="bold16">
                  {getDate(data.paymentDate)}
                </S.SideContent>
              </S.SideBox>
            </S.SideWrapper>
          </>
        )}
      </S.Section>
    </S.Wrapper>
  );
}

const PurchaseOrder = styled.p`
  flex-grow: 1;
  padding-block: 24px;
  padding-right: 24px;
`;

const EmptyPurchaseOrder = styled.p`
  width: 100%;
  height: 234px;
`;
