import * as S from "./LoginForm.styles";

export default function LoginForm() {
  return (
    <S.Wrapper className="flex-center">
      <S.FormWrapper className="flex-column-center">
        <S.Header className="bold28">로그인</S.Header>
        <S.LoginInput className="medium18" placeholder="이메일" />
        <S.LoginInput className="medium18" placeholder="비밀번호" />
        <S.ErrorMessage className="regular14"></S.ErrorMessage>
        <S.LoginButton className="bold18">로그인</S.LoginButton>
        <S.MenuWrapper className="flex-center regular14">
          <a>이메일 찾기</a>
          <S.MenuDivider>|</S.MenuDivider>
          <a>비밀번호 찾기</a>
          <S.MenuDivider>|</S.MenuDivider>
          <a>회원가입</a>
        </S.MenuWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
