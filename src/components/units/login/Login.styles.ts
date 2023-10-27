import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--color-lightGray);
`;

export const FormWrapper = styled.div`
  padding: 70px 57px 80px 57px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const LoginInput = styled.input`
  width: 450px;
  height: 55px;
  padding: 0 25px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  color: var(--color-darkGray);
  margin-bottom: 15px;

  ::placeholder {
    color: var(--color-normalGray);
  }
  :focus {
    border: 1px solid var(--color-darkGray);
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  height: 14px;
  color: var(--color-alert);
  margin-bottom: 15px;
  padding-left: 5px;
`;

export const LoginButton = styled.button`
  width: 450px;
  height: 55px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);
  margin-bottom: 28px;
`;

export const MenuWrapper = styled.div`
  color: var(--color-darkGray);
  padding-right: 15px;
`;

export const MenuDivider = styled.p`
  margin: 0 15px;
`;
