import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "../CreateOrder.styles";
import { useEffect } from "react"
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";
import { ICreateOrderPageProps } from "../CreateOrder.types";
import { useRecoilState } from "recoil";
import { createOrderState } from "@/src/store/createOrder"

export default function RequestInfo(props: ICreateOrderPageProps) {
  const requestArgs = useInputWithMaxLength(200);
  const [orderState, setOrderState] = useRecoilState(createOrderState);

  useEffect(() =>{
    requestArgs.setValue(orderState.request);
  }, []);

  const setCreateOrderState = () => {
    setOrderState({
      ...orderState,
      request: requestArgs.value
    });
  }

  const onNext = () => {
    setCreateOrderState();
    if(props.onNext) props.onNext();
  }

  const onBefore = () => {
    setCreateOrderState();
    if(props.onBefore) props.onBefore();
  }

  return (
    <S.FormWrapper className="flex-column">
      <S.FormBodyWrapper>
        <S.FormTitle className="bold24">요청 사항</S.FormTitle>
        <Spacer width="100%" height="30px" />
        <S.FormTextArea
          className="regular16"
          placeholder="요청사항을 입력해주세요"
          value={requestArgs.value}
          maxLength={200}
          onChange={requestArgs.onChange}
        />
        <Spacer width="100%" height="8px" />
        <S.FormInputLength className="regular14 flex-column-end">
          {`${requestArgs.value.length}/200`}
        </S.FormInputLength>
      </S.FormBodyWrapper>
      <S.FormButtonWrapper className="flex-column-end">
        <div className="flex-row">
          <S.BackButton className="bold20" onClick={onBefore}>
            이전
          </S.BackButton>
          <S.NextButton
            className="bold20"
            enabled={true}
            onClick={onNext}
          >
            다음
          </S.NextButton>
        </div>
      </S.FormButtonWrapper>
    </S.FormWrapper>
  );
}
