import SignUpInput from "../../commons/inputs/signup/SingUpInput.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./SignUp.styles";

export default function SignUp() {
  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper className="flex-column-center">
        <S.Header className="bold28">회원가입</S.Header>
        <SignUpInput
          placeHolder="이메일"
          editable={true}
          focusable={false}
          tailButtonTitle="인증요청"
          tailButtonValidate={true}
        />
        <Spacer width="100%" height="30px" />
        <S.SignUpButton className="bold18">가입하기</S.SignUpButton>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
