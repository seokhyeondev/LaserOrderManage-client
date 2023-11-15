import styled from "@emotion/styled";
import {
  IInputProps,
  IInputWrapperProps,
  ITailButtonProps,
} from "./SignUpInput.types";

export const InputWrapper = styled.div<IInputWrapperProps>`
  width: 450px;
  height: 55px;
  padding: 0 ${(props) => (props.hasTail ? "11px" : "25px")} 0 25px;
  border: 1px solid
    ${(props) =>
      props.isError
        ? "var(--color-alert)"
        : props.isFocus
        ? "var(--color-darkGray)"
        : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  cursor: ${(props) => (props.focusable ? "pointer" : "default")};
`;

export const Input = styled.input<IInputProps>`
  width: 100%;
  cursor: ${(props) => (props.focusable ? "pointer" : "text")};
  ::placeholder {
    color: var(--color-normalGray);
  }
  :disabled {
    background-color: var(--color-white);
  }
`;

export const TailButton = styled.button<ITailButtonProps>`
  width: 80px;
  height: 36px;
  background-color: ${(props) =>
    props.isActive ? "var(--color-primary)" : "var(--color-mediumGray)"};
  color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const ErrorMessage = styled.p`
  width: 100%;
  color: var(--color-alert);
  padding-left: 5px;
`;
