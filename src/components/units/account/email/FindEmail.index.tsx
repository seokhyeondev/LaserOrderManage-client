import AccountInput from "@/src/components/commons/inputs/account/AccountInput.index";
import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "@/src/components/units/account/Accout.styles";

export default function FindEmail() {
  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper>
        <S.Title className="bold28">이메일 찾기</S.Title>
        <Spacer width="100%" height="52px" />
        <AccountInput
          placeholder="이름"
          isError={false}
          errorMessage="이름은 두 글자 이상입니다"
          onChange={() => {}}
        />
        <Spacer width="100%" height="14px" />
        <AccountInput
          placeholder="휴대폰 번호 (숫자만 입력해주세요)"
          isError={false}
          errorMessage="올바른 휴대폰 번호를 입력해주세요"
          onChange={() => {}}
        />
        <Spacer width="100%" height="40px" />
        <S.Button className="bold18">이메일 찾기</S.Button>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
