import * as S from "./OrderPagination.styles";

export default function OrderPagination() {
  return (
    <S.Wrapper className="flex-center">
      {new Array(4).fill(1).map((_, index) => (
        <S.Page key={index} id={String(index)} className="flex-center">
          {index + 1}
        </S.Page>
      ))}
    </S.Wrapper>
  );
}
