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
          isError={false}
          needDefaultSpace={false}
          errorMessage="이메일을 인증해주세요."
          tailButtonTitle="인증요청"
          tailButtonValidate={true}
        />
        <SignUpInput
          placeHolder="이메일 인증 코드"
          editable={true}
          focusable={false}
          isError={false}
          needDefaultSpace={true}
          errorMessage="인증 코드를 다시 확인해주세요."
          tailButtonTitle="확인"
          tailButtonValidate={true}
        />
        <SignUpInput
          placeHolder="비밀번호"
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요."
          needDefaultSpace={true}
        />
        <SignUpInput
          placeHolder="비밀번호 확인"
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="비밀번호가 일치하지 않습니다."
          needDefaultSpace={true}
        />
        <SignUpInput
          placeHolder="이름"
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="이름을 입력해주세요."
          needDefaultSpace={true}
        />
        <SignUpInput
          placeHolder="휴대폰 번호 (숫자만 입력해주세요)"
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="올바른 휴대폰 번호를 입력해주세요."
          needDefaultSpace={true}
        />
        <SignUpInput
          placeHolder="업체명 (선택)"
          editable={true}
          focusable={false}
          needDefaultSpace={true}
        />
        <SignUpInput
          placeHolder="주소 (배송지)"
          editable={false}
          focusable={true}
          tailButtonTitle="검색하기"
          isError={false}
          errorMessage="주소를 입력해주세요."
          needDefaultSpace={false}
        />
        <SignUpInput
          placeHolder="상세 주소"
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="상세 주소를 입력해주세요."
          needDefaultSpace={true}
        />
        <Spacer width="100%" height="100px" />
        <S.SignUpButton className="bold18">가입하기</S.SignUpButton>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
