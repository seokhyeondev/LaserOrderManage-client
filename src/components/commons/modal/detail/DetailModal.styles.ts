import styled from "@emotion/styled";

interface IWrapperProps {
  width: number;
  height?: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  padding: 30px 24px 14px 24px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const Title = styled.p`
  margin-bottom: 40px;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.p``;
export const Required = styled.p`
  color: var(--color-alert);
  margin-left: 3px;
`;

interface IInputWrapperProps {
  focusable?: boolean;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  width: 100%;
  padding: 15px 14px;
  margin-bottom: 44px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  cursor: ${(props) => (props.focusable ? "pointer" : "none")};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

interface IInputProps {
  underline?: boolean;
}

export const Input = styled.input<IInputProps>`
  width: 100%;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  &::placeholder {
    color: var(--color-normalGray);
  }
  &:read-only {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div``;

export const CancelButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: var(--color-lightGray);
  color: var(--color-darkGray);
  border-radius: var(--border-radius);
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
`;
