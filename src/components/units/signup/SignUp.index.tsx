import { useInput, useInputWithRegex } from "@/src/lib/hooks/useInput";
import SignUpInput from "../../commons/inputs/signup/SingUpInput.index";
import Spacer from "../../commons/spacer/Spacer.index";
import * as S from "./SignUp.styles";
import {
  emailRegex,
  numberRegex,
  passwordRegex,
  phoneRegex,
} from "@/src/lib/constants/regex";
import { useState } from "react";

export default function SignUp() {
  const [email, onChangeEmail] = useInput();
  const [sendCode, setSendCode] = useState(false);

  const [code, onChangeCode] = useInput();
  const [codeChecked, setCodeChecked] = useState(false);

  const [password, onChangePassword] = useInput();
  const [rePassword, onChangeRePassword] = useInput();

  const [name, onChangeName] = useInput();
  const [phone, onChangePhone] = useInputWithRegex(numberRegex, "");

  const sendCodeToEmail = () => {
    if (!emailRegex.test(email) || codeChecked) {
      return;
    }
    setSendCode(true);
  };

  const checkEmailCode = () => {
    if (code.length === 4) {
      setCodeChecked(true);
    }
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper className="flex-column-center">
        <S.Header className="bold28">회원가입</S.Header>
        <SignUpInput
          placeHolder="이메일"
          editable={!codeChecked}
          focusable={false}
          isError={false}
          needDefaultSpace={false}
          errorMessage="이메일을 인증해주세요."
          tailButtonTitle={
            codeChecked ? "인증완료" : sendCode ? "재요청" : "인증요청"
          }
          tailButtonValidate={emailRegex.test(email) && !codeChecked}
          onChange={onChangeEmail}
          onClickTailButton={sendCodeToEmail}
        />
        {sendCode && !codeChecked ? (
          <SignUpInput
            placeHolder="이메일 인증 코드"
            hideInput={true}
            editable={!codeChecked}
            focusable={false}
            isError={false}
            needDefaultSpace={true}
            errorMessage="인증 코드를 다시 확인해주세요."
            tailButtonTitle="확인"
            tailButtonValidate={code.length === 4}
            onChange={onChangeCode}
            onClickTailButton={checkEmailCode}
          />
        ) : (
          <Spacer width="100%" height="24px" />
        )}
        <SignUpInput
          placeHolder="비밀번호"
          hideInput={true}
          editable={true}
          focusable={false}
          isError={password !== "" && !passwordRegex.test(password)}
          errorMessage="영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요."
          needDefaultSpace={true}
          onChange={onChangePassword}
        />
        <SignUpInput
          placeHolder="비밀번호 확인"
          hideInput={true}
          editable={true}
          focusable={false}
          isError={
            password !== "" && rePassword !== "" && rePassword !== password
          }
          errorMessage="비밀번호가 일치하지 않습니다."
          needDefaultSpace={true}
          onChange={onChangeRePassword}
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
          value={phone}
          editable={true}
          focusable={false}
          isError={false}
          errorMessage="올바른 휴대폰 번호를 입력해주세요."
          needDefaultSpace={true}
          onChange={onChangePhone}
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
