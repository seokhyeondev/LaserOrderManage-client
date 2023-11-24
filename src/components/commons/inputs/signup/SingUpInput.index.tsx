import { useState } from "react";
import * as S from "./SignUpInput.styles";
import Spacer from "../../spacer/Spacer.index";
import { ISignUpInputProps } from "./SignUpInput.types";

export default function SignUpInput(props: ISignUpInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <S.InputWrapper
        className="flex-row-between-center"
        isFocus={isFocused}
        hasTail={props.tailButtonTitle !== null}
        isError={props.isError ?? false}
        onClick={props.onClickInput}
      >
        <S.Input
          className="medium18"
          placeholder={props.placeHolder}
          value={props.value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={!props.editable}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          type={props.hideInput ? "password" : "text"}
          readOnly={props.readonly}
        />
        {props.tailButtonTitle && (
          <S.TailButton
            className="medium14"
            isActive={props?.tailButtonValidate ?? true}
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
      {props.needDefaultSpace && !props.isError ? (
        <Spacer width="100%" height="32px" />
      ) : (
        <Spacer width="100%" height="8px" />
      )}
    </>
  );
}
