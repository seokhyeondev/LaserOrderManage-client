import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  padding: 25px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const Title = styled.p``;

export const Label = styled.p``;

export const Required = styled.p`
  color: var(--color-alert);
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  ::placeholder {
    color: var(--color-normalGray);
  }
  :focus {
    border: 1px solid var(--color-black);
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 12px;
  margin-left: 3px;
  color: var(--color-alert);
`;

export const Announce = styled.p`
  width: 100%;
  text-align: center;
`;

export const SubmitButton = styled.button`
  flex-grow: 1;
  height: 50px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border-radius: var(--border-radius);

  &:disabled {
    background-color: var(--color-mediumGray);
  }
`;

export const CancelButton = styled.button`
  flex-grow: 1;
  height: 50px;
  color: var(--color-darkGray);
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
`;
