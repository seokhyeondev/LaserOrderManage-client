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
        focusable={props.focusable}
      >
        <S.Input
          className="medium18"
          placeholder={props.placeHolder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={!props.editable}
          focusable={props.focusable}
        />
        {props.tailButtonTitle && (
          <S.TailButton
            className="medium14"
            isActive={props?.tailButtonValidate ?? true}
          >
            {props.tailButtonTitle}
          </S.TailButton>
        )}
      </S.InputWrapper>
      <Spacer width="100%" height="8px" />
      {props.isError && (
        <S.ErrorMessage className="regular14">
          {props.errorMessage}
        </S.ErrorMessage>
      )}
    </>
  );
}
