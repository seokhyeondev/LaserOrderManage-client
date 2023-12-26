import { ChangeEvent, KeyboardEvent, useState } from "react";
import * as S from "./AccountInput.styles";
import Spacer from "../../spacer/Spacer.index";

interface IAccountInputProps {
  placeholder: string;
  isError: boolean;
  errorMessage: string;
  value?: string;
  hideValue?: boolean;
  disabled?: boolean;
  maxLength?: number;
  tailButtonTitle?: string;
  tailButtonValidate?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClickTailButton?: () => void;
}

export default function AccountInput(props: IAccountInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <S.InputWrapper
        className="flex-row-between-center"
        isFocus={isFocused}
        isError={props.isError}
        hasTail={props.tailButtonTitle !== null}
      >
        <S.Input
          className="medium18"
          placeholder={props.placeholder}
          value={props.value}
          disabled={props.disabled}
          type={props.hideValue ? "password" : "text"}
          maxLength={props.maxLength}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {props.tailButtonTitle && (
          <S.TailButton
            className="medium14"
            isActive={props.tailButtonValidate ?? true}
            onClick={props.onClickTailButton}
          >
            {props.tailButtonTitle}
          </S.TailButton>
        )}
      </S.InputWrapper>
      {props.isError && (
        <>
          <Spacer width="100%" height="8px" />
          <S.ErrorMessage className="regular14">
            {props.errorMessage}
          </S.ErrorMessage>
        </>
      )}
    </>
  );
}
