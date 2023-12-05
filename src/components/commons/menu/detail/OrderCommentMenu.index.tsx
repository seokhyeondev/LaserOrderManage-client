import * as S from "./OrderCommentMenu.styles";
import SendIcon from "../../icons/SendIcon.index";

export default function OrderCommentMenu() {
  return (
    <S.Wrapper className="flex-column-start">
      <S.Label className="bold20">댓글</S.Label>
      <S.CommentsWrapper>
        <OrderCommentItem />
      </S.CommentsWrapper>
      <S.InputWrapper className="flex-row-between">
        <S.CommentInput
          placeholder="댓글 작성.."
          className="regular12"
          maxLength={200}
        />
        <SendIcon size={24} />
      </S.InputWrapper>
    </S.Wrapper>
  );
}

function OrderCommentItem() {
  return (
    <S.CommentItemWrapper>
      <S.CommentWritter className="regular12">업체명</S.CommentWritter>
      <S.CommentWrapper>
        <p className="regular14">안녕하세요 고객님, 어떻게 도와드릴까요?</p>
        <S.CommentDate className="regular10">11월 17일</S.CommentDate>
      </S.CommentWrapper>
    </S.CommentItemWrapper>
  );
}
