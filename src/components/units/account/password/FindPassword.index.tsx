import AccountInput from "@/src/components/commons/inputs/account/AccountInput.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "@/src/components/units/account/Accout.styles";
import { emailRegex } from "@/src/lib/constants/regex";
import { useInputWithError } from "@/src/lib/hooks/useInput";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FindPassword() {
  const [sendCode, setSendCode] = useState(false);
  const [codeSending, setCodeSending] = useState(false);
  const router = useRouter();

  const emailInputArgs = useInputWithError(
    "이메일을 인증해주세요.",
    (value: string) => emailRegex.test(value),
    (value: string) => sendCode && emailRegex.test(value),
  );

  const sendCodeToEmail = () => {
    setSendCode(true);
  };

  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper>
        <S.Title className="bold28">비밀번호 찾기</S.Title>
        <Spacer width="100%" height="52px" />
        {!sendCode && (
          <>
            <AccountInput
              placeholder="이메일"
              isError={emailInputArgs.error}
              errorMessage={emailInputArgs.errorMessage}
              tailButtonTitle="메일전송"
              tailButtonValidate={emailInputArgs.isCorrect}
              disabled={codeSending}
              onChange={emailInputArgs.onChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendCodeToEmail();
              }}
              onClickTailButton={sendCodeToEmail}
            />
            <Spacer width="100%" height="40px" />
          </>
        )}
        {sendCode && (
          <>
            <S.ResultWrapper>
              <p className="regular16">{`회원님의 이메일 "${emailInputArgs.value}"에서 비밀번호를 변경해주세요`}</p>
            </S.ResultWrapper>
            <Spacer width="100%" height="60px" />
            <S.Button
              className="bold18"
              onClick={() => router.replace("/login")}
            >
              로그인
            </S.Button>
          </>
        )}
      </S.FormWrapper>
    </S.Wrapper>
  );
}
