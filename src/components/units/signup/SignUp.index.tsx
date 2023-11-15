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
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  KeyboardEvent,
} from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

export default function SignUp() {
  const [email, onChangeEmail] = useInput();
  const [emailError, setEmailError] = useState(false);
  const [sendCode, setSendCode] = useState(false);

  const [code, onChangeCode] = useInput();
  const [codeError, setCodeError] = useState(false);
  const [codeChecked, setCodeChecked] = useState(false);

  const [password, onChangePassword] = useInput();
  const [passwordError, setPasswordError] = useState(false);

  const [rePassword, onChangeRePassword] = useInput();
  const [rePasswordError, setRePasswordError] = useState(false);

  const [name, onChangeName] = useInput();
  const [nameError, setNameError] = useState(false);

  const [phone, onChangePhone] = useInputWithRegex(numberRegex, "");
  const [phoneError, setPhoneError] = useState(false);

  const [company, onChangeCompany] = useInput();

  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [detailAddress, onChangeDetailAddress] = useInput();

  const openPostPopup = useDaumPostcodePopup();

  const sendCodeToEmail = () => {
    if (!emailRegex.test(email) || codeChecked) {
      setEmailError(true);
      return;
    }
    setSendCode(true);
    setEmailError(false);
    setCodeError(false);
  };

  const sendCodeToEmailWithEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendCodeToEmail();
    }
  };

  const checkEmailCode = () => {
    if (code.length === 4) {
      setCodeChecked(true);
      setCodeError(false);
    }
  };

  const checkEmailCodeWithEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      checkEmailCode();
    }
  };

  const onChangePasswordHandleError = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onChangePassword(event);
    if (passwordRegex.test(event.target.value)) {
      setPasswordError(false);
    }
  };

  const onChangeRePasswordHandleError = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeRePassword(event);
    if (event.target.value === password) {
      setRePasswordError(false);
    }
  };

  const onChangeNameHandleError = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(event);
    if (event.target.value.length > 1) {
      setNameError(false);
    }
  };

  const onChangePhoneHandleError = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePhone(event);
    if (phoneRegex.test(event.target.value)) {
      setPhoneError(false);
    }
  };

  const addressCallback = (data: Address) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    setAddressError(false);
  };

  const onOpenPostSearch = () => {
    openPostPopup({
      popupKey: "postPopup",
      top: 0,
      left: 0,
      onComplete: addressCallback,
    });
  };

  const checkError = (
    state: boolean,
    setError: Dispatch<SetStateAction<boolean>>,
  ): boolean => {
    if (!state) {
      setError(true);
      return true;
    }
    return false;
  };

  const joinAccount = () => {
    const checkEmailError = checkError(
      sendCode && emailRegex.test(email),
      setEmailError,
    );
    const checkCodeError = checkError(sendCode && codeChecked, setCodeError);
    const checkPasswordError = checkError(
      passwordRegex.test(password),
      setPasswordError,
    );
    const checkRePasswordError = checkError(
      rePassword === password && rePassword !== "",
      setRePasswordError,
    );
    const checkNameError = checkError(name.length > 1, setNameError);
    const checkPhoneError = checkError(phoneRegex.test(phone), setPhoneError);
    const checkAddressError = checkError(address !== "", setAddressError);
    if (
      !(
        checkEmailError &&
        checkCodeError &&
        checkPasswordError &&
        checkRePasswordError &&
        checkNameError &&
        checkPhoneError &&
        checkAddressError
      )
    ) {
      return;
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
          isError={emailError}
          needDefaultSpace={false}
          errorMessage="이메일을 인증해주세요."
          tailButtonTitle={
            codeChecked ? "인증완료" : sendCode ? "재요청" : "인증요청"
          }
          tailButtonValidate={emailRegex.test(email) && !codeChecked}
          onChange={onChangeEmail}
          onKeyDown={sendCodeToEmailWithEnter}
          onClickTailButton={sendCodeToEmail}
        />
        {sendCode && !codeChecked ? (
          <SignUpInput
            placeHolder="이메일 인증 코드"
            hideInput={true}
            editable={!codeChecked}
            focusable={false}
            isError={codeError}
            needDefaultSpace={true}
            errorMessage="인증 코드를 다시 확인해주세요."
            tailButtonTitle="확인"
            tailButtonValidate={code.length === 4}
            onChange={onChangeCode}
            onKeyDown={checkEmailCodeWithEnter}
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
          isError={
            (password !== "" && !passwordRegex.test(password)) || passwordError
          }
          errorMessage="영문, 숫자, 특수문자를 조합하여 8자리 이상 입력해주세요."
          needDefaultSpace={true}
          onChange={onChangePasswordHandleError}
        />
        <SignUpInput
          placeHolder="비밀번호 확인"
          hideInput={true}
          editable={true}
          focusable={false}
          isError={
            (password !== "" && rePassword !== "" && rePassword !== password) ||
            rePasswordError
          }
          errorMessage="비밀번호가 일치하지 않습니다."
          needDefaultSpace={true}
          onChange={onChangeRePasswordHandleError}
        />
        <SignUpInput
          placeHolder="이름"
          editable={true}
          focusable={false}
          isError={nameError}
          errorMessage="이름을 입력해주세요."
          needDefaultSpace={true}
          onChange={onChangeNameHandleError}
        />
        <SignUpInput
          placeHolder="휴대폰 번호 (숫자만 입력해주세요)"
          value={phone}
          editable={true}
          focusable={false}
          isError={phoneError}
          errorMessage="올바른 휴대폰 번호를 입력해주세요."
          needDefaultSpace={true}
          onChange={onChangePhoneHandleError}
        />
        <SignUpInput
          placeHolder="업체명 (선택)"
          editable={true}
          focusable={false}
          needDefaultSpace={true}
          onChange={onChangeCompany}
        />
        <SignUpInput
          placeHolder="주소 (배송지)"
          value={address}
          editable={false}
          focusable={true}
          tailButtonTitle="검색하기"
          isError={addressError}
          errorMessage="주소를 입력해주세요."
          needDefaultSpace={false}
          onClickInput={onOpenPostSearch}
        />
        <SignUpInput
          placeHolder="상세 주소"
          editable={true}
          focusable={false}
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
