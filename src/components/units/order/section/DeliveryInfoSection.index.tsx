import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import EditIcon from "@/src/components/commons/icons/EditIcon.index";

export default function DeliveryInfoSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper className="flex-row-between">
        <S.Title className="bold18">배송 정보</S.Title>
        <S.EditBox className="flex-row">
          <EditIcon size={20} />
          <Spacer width="5px" height="100%" />
          <S.EditBoxText className="regular16">배송지 수정하기</S.EditBoxText>
        </S.EditBox>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="20px" />
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">배송지명</S.Label>
          <S.Content className="regular16">회사</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">수령인</S.Label>
          <S.Content className="regular16">김우리</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">우편번호</S.Label>
          <S.Content className="regular16">23456</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">주소</S.Label>
          <S.Content className="regular16">경기도 안산시 단원구 21길</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">상세 주소</S.Label>
          <S.Content className="regular16">시화공단 234번지</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">연락처1</S.Label>
          <S.Content className="regular16">010-0000-0000</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">주소</S.Label>
          <S.Content className="regular16">010-1111-1111</S.Content>
        </S.InfoWrapper>
        <Spacer width="100%" height="20px" />
      </S.Section>
    </S.Wrapper>
  );
}
