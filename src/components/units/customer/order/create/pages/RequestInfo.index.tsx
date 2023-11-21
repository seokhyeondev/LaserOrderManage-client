import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";

export default function RequestInfo() {
  return (
    <S.FormWrapper className="flex-column">
      <S.FormBodyWrapper>
        <S.FormTitle className="bold24">요청 사항</S.FormTitle>
        <Spacer width="100%" height="30px" />
        <S.FormTextArea
          className="regular16"
          placeholder="요청사항을 입력해주세요"
        />
        <Spacer width="100%" height="8px" />
        <S.FormInputLength className="regular14 flex-column-end">
          0/200
        </S.FormInputLength>
      </S.FormBodyWrapper>
      <S.FormButtonWrapper className="flex-column-end">
        <div className="flex-row">
          <S.BackButton className="bold20">이전</S.BackButton>
          <S.NextButton className="bold20" enabled={true}>
            다음
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
