import * as S from "./OrderDetailBottombar.styles";

interface IOrderDetailBottombarProps {
  showCondition: boolean;
  announce: string;
  buttonText: string;
  onButton: () => void;
}

export default function OrderDetailBottombar(
  props: IOrderDetailBottombarProps,
) {
  return (
    <S.Wrapper className="flex-row-between-center" show={props.showCondition}>
      <S.Announce className="medium20">{props.announce}</S.Announce>
      <S.BottombarButton className="bold18" onClick={props.onButton}>
        {props.buttonText}
      </S.BottombarButton>
    </S.Wrapper>
  );
}
