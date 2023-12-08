import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";
import { IDeliveryInfoSectionProps } from "./DetailSection.types";

export default function DeliveryInfoSection({
  data,
  role,
  status,
}: IDeliveryInfoSectionProps) {
  const onChangeAddress = () => {};

  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">배송 정보</S.Title>
        {role === "ROLE_CUSTOMER" &&
          !(status === "배송 중" || status === "거래 완료") && (
            <S.EditBox className="flex-row" onClick={onChangeAddress}>
              <EditIcon size={20} />
              <Spacer width="5px" height="100%" />
              <S.EditBoxText className="regular16">
                배송지 수정하기
              </S.EditBoxText>
            </S.EditBox>
          )}
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="20px" />
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">배송지명</S.Label>
          <S.Content className="regular16">{data.name}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">수령인</S.Label>
          <S.Content className="regular16">{data.receiver}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">우편번호</S.Label>
          <S.Content className="regular16">{data.zipCode}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">주소</S.Label>
          <S.Content className="regular16">{data.address}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">상세 주소</S.Label>
          <S.Content className="regular16">{data.detailAddress}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">연락처1</S.Label>
          <S.Content className="regular16">{data.phone1}</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">연락처2</S.Label>
          <S.Content className="regular16">
            {data.phone2 ? data.phone2 : "-"}
          </S.Content>
        </S.InfoWrapper>
        <Spacer width="100%" height="20px" />
      </S.Section>
    </S.Wrapper>
  );
}
