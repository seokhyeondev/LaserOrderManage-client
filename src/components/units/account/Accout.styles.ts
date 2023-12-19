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

export const Title = styled.p`
  width: 100%;
  text-align: center;
`;

export const Result = styled.p`
  color: var(--color-primary);
`;

export const Button = styled.button`
  width: 450px;
  height: 55px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);

  &:disabled {
    background-color: var(--color-mediumGray);
  }
`;

export const SubButton = styled.button`
  width: 450px;
  height: 55px;
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
  color: var(--color-darkGray);
`;
