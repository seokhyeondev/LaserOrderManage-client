import { ChangeEvent, KeyboardEvent } from "react";

export interface ISignUpInputProps {
  placeHolder: string;
  value?: string;
  hideInput?: boolean;
  isError?: boolean;
  errorMessage?: string;
  needDefaultSpace: boolean;
  editable: boolean;
  tailButtonTitle?: string;
  tailButtonValidate?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickInput?: () => void;
  onClickTailButton?: () => void;
}

export interface IInputWrapperProps {
  isFocus: boolean;
  hasTail: boolean;
  isError: boolean;
}

export interface ITailButtonProps {
  isActive: boolean;
}
