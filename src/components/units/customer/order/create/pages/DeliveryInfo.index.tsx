import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";

export default function DeliveryInfo() {
  return (
    <S.FormWrapper className="flex-column">
      <S.FormBodyWrapper>
        <S.FormTitle className="bold24">배송 정보</S.FormTitle>
        <Spacer width="100%" height="50px" />
        <div className="flex-row">
          <S.FormLabel className="medium20">배송지를 선택해주세요</S.FormLabel>
          <S.RequiredLabel className="medium20">*</S.RequiredLabel>
        </div>
        <Spacer width="100%" height="30px" />
        <div>
          <S.AddressItem isSelect={false}>
            <div className="flex-row-align-center">
              <p className="bold16">회원 주소</p>
              <Spacer width="11px" height="100%" />
              <p className="medium16">(서울 마포구 성미산로 160, 휴먼빌)</p>
              <Spacer width="11px" height="100%" />
              <S.BasicAddressLabel className="regular10 flex-center">
                기본 배송지
              </S.BasicAddressLabel>
            </div>
            <Spacer width="100%" height="8px" />
            <S.AddressUserInfo className="regular14">
              안승우 · 010-0000-0000
            </S.AddressUserInfo>
          </S.AddressItem>
        </div>
        <Spacer width="100%" height="24px" />
        <S.NewAddressLabel className="bold14">
          새로운 배송지 등록하기
        </S.NewAddressLabel>
      </S.FormBodyWrapper>
      <S.FormButtonWrapper className="flex-column-end">
        <div className="flex-row">
          <S.BackButton className="bold20">이전</S.BackButton>
          <S.NextButton className="bold20" enabled={true}>
            견적 요청하기
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
