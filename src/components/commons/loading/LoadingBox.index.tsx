import * as S from "./LoadingBox.styles";

interface ILoadingBox {
  backgroundColor: string;
}

export default function LoadingBox({ backgroundColor }: ILoadingBox) {
  return (
    <S.Ring size="50px" backgroundColor={backgroundColor}>
      <div />
      <div />
      <div />
      <div />
    </S.Ring>
  );
}
