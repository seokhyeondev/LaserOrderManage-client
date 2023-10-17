import { IPaginationProps } from "../Pagination.types";
import * as S from "./OrderPagination.styles";

export default function OrderPagination(props: IPaginationProps) {
  return (
    <S.Wrapper className="flex-center">
      {new Array(4).fill(1).map((_, index) => (
        <S.Page
          key={props.startPage + index}
          id={String(props.startPage + index)}
          className="flex-center"
          isActive={props.startPage + index == props.activedPage}
          onClick={props.onClickPage}
        >
          {props.startPage + index}
        </S.Page>
      ))}
    </S.Wrapper>
  );
}
