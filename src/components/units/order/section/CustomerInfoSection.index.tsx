import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";

export default function CustomerInfoSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title className="bold18">고객 정보</S.Title>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="20px" />
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">고객 이름</S.Label>
          <S.Content className="regular16">김우리</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">업체명</S.Label>
          <S.Content className="regular16">우리 기술</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">연락처</S.Label>
          <S.Content className="regular16">010-0000-0000</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">이메일</S.Label>
          <S.Content className="regular16">wuri001@gmail.com</S.Content>
        </S.InfoWrapper>
        <Spacer width="100%" height="20px" />
      </S.Section>
    </S.Wrapper>
  );
}
