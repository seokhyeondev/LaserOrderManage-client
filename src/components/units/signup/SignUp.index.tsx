import { useInput, useInputWithError } from "@/src/lib/hooks/useInput";
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
import { Address } from "react-daum-postcode";
import { useRouter } from "next/router";
import { useDaumPostPopup } from "@/src/lib/hooks/useDaumPostPopup";

export default function SignUp() {
  
  const [sendCode, setSendCode] = useState(false);
  const emailInputArgs = useInputWithError(
    "이메일을 인증해주세요.", 
    (value: string) => emailRegex.test(value), 
    (value: string) => sendCode && emailRegex.test(value)
  );

  const [codeChecked, setCodeChecked] = useState(false);
  const codeInputArgs = useInputWithError(
    "인증 코드를 다시 확인해주세요.",
    (value: string) => value !== "",
    (value: string) => sendCode && codeChecked
  );

  const passwordInputArgs = useInputWithError(
    "영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요.",
    (value: string) => passwordRegex.test(value),
    (value: string) => passwordRegex.test(value)
  );
  const rePasswordInputArgs = useInputWithError(
    "비밀번호가 일치하지 않습니다.",
    (value: string) => value === passwordInputArgs.value,
    (value: string) => value !== "" && value === passwordInputArgs.value
  )

  const nameInputArgs = useInputWithError(
    "이름을 입력해주세요.",
    (value: string) => value.length > 1,
    (value: string) => value.length > 1
  );

  const phoneInputArgs = useInputWithError(
    "올바른 휴대폰 번호를 입력해주세요.",
    (value: string) => phoneRegex.test(value),
    (value: string) => phoneRegex.test(value),
    numberRegex,
  );

  const [company, onChangeCompany] = useInput();

  const [zoneCode, setZoneCode] = useState("");
  const addressInputArgs = useInputWithError(
    "주소를 입력해주세요.",
    (value: string) => value !== "",
    (value: string) => value !== ""
  )
  const [detailAddress, onChangeDetailAddress] = useInput();
  const addressCallback = (data: Address) => {
    setZoneCode(data.zonecode);
    addressInputArgs.setValue(data.address);
    addressInputArgs.setError(false);
  };
  const openPostPopup = useDaumPostPopup(addressCallback);

  const router = useRouter();

  const sendCodeToEmail = () => {
    if (!emailRegex.test(emailInputArgs.value) || codeChecked) {
      emailInputArgs.setError(true);
      return;
    }
    setSendCode(true);
    emailInputArgs.setError(false);
    codeInputArgs.setError(false);
  };

  const checkEmailCode = () => {
    if (codeInputArgs.value.length === 4) {
      setCodeChecked(true);
      codeInputArgs.setError(false);
    }
  };

  const joinAccount = () => {
    const emailPass = emailInputArgs.passError();
    const codePass = codeInputArgs.passError();
    const passwordPass = passwordInputArgs.passError();
    const rePasswordPass = rePasswordInputArgs.passError();
    const namePass = nameInputArgs.passError();
    const phonePass = phoneInputArgs.passError();
    const addressPass = addressInputArgs.passError();
    if (!(emailPass && codePass && passwordPass &&
      rePasswordPass && namePass && phonePass && addressPass)
      ) {
      return;
    }
    router.replace("/");
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper className="flex-column-center">
        <S.Header className="bold28">회원가입</S.Header>
        <SignUpInput
          placeHolder="이메일"
          editable={!codeChecked}
          isError={emailInputArgs.error}
          needDefaultSpace={false}
          errorMessage={emailInputArgs.errorMessage}
          tailButtonTitle={codeChecked ? "인증완료" : sendCode ? "재요청" : "인증요청"}
          tailButtonValidate={emailRegex.test(emailInputArgs.value) && !codeChecked}
          onChange={emailInputArgs.onChange}
          onKeyDown={(e) => {if(e.key === "Enter") sendCodeToEmail()}}
          onClickTailButton={sendCodeToEmail}
        />
        {sendCode && !codeChecked ? (
          <SignUpInput
            placeHolder="이메일 인증 코드"
            hideInput={true}
            editable={!codeChecked}

            isError={codeInputArgs.error}
            needDefaultSpace={true}
            errorMessage={codeInputArgs.errorMessage}
            tailButtonTitle="확인"
            tailButtonValidate={codeInputArgs.isCorrect}
            onChange={codeInputArgs.onChange}
            onKeyDown={(e) => {if(e.key === "Enter") checkEmailCode()}}
            onClickTailButton={checkEmailCode}
          />
        ) : (
          <Spacer width="100%" height="24px" />
        )}
        <SignUpInput
          placeHolder="비밀번호"
          hideInput={true}
          editable={true}
          isError={passwordInputArgs.errorWithEmpty || passwordInputArgs.error}
          errorMessage={passwordInputArgs.errorMessage}
          needDefaultSpace={true}
          onChange={passwordInputArgs.onChange}
        />
        <SignUpInput
          placeHolder="비밀번호 확인"
          hideInput={true}
          editable={true}
          isError={
            (passwordInputArgs.value !== "" && rePasswordInputArgs.errorWithEmpty) ||
            rePasswordInputArgs.error
          }
          errorMessage={rePasswordInputArgs.errorMessage}
          needDefaultSpace={true}
          onChange={rePasswordInputArgs.onChange}
        />
        <SignUpInput
          placeHolder="이름"
          editable={true}
          isError={nameInputArgs.error}
          errorMessage={nameInputArgs.errorMessage}
          needDefaultSpace={true}
          onChange={nameInputArgs.onChange}
        />
        <SignUpInput
          placeHolder="휴대폰 번호 (숫자만 입력해주세요)"
          value={phoneInputArgs.value}
          editable={true}
          isError={phoneInputArgs.error}
          errorMessage={phoneInputArgs.errorMessage}
          needDefaultSpace={true}
          onChange={phoneInputArgs.onChange}
        />
        <SignUpInput
          placeHolder="업체명 (선택)"
          editable={true}
          needDefaultSpace={true}
          onChange={onChangeCompany}
        />
        <SignUpInput
          placeHolder="주소 (배송지)"
          value={addressInputArgs.value}
          editable={true}
          tailButtonTitle="검색하기"
          isError={addressInputArgs.error}
          errorMessage={addressInputArgs.errorMessage}
          needDefaultSpace={false}
          onClickInput={openPostPopup}
        />
        <SignUpInput
          placeHolder="상세 주소 (선택)"
          editable={true}
          needDefaultSpace={false}
          onChange={onChangeDetailAddress}
        />
        <Spacer width="100%" height="100px" />
        <S.SignUpButton className="bold18" onClick={joinAccount}>
          가입하기
        </S.SignUpButton>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
