import * as S from "./OrderCommentMenu.styles";
import styled from "@emotion/styled";
import SendIcon from "../../icons/SendIcon.index";
import {
  IOrderComment,
  IOrderCommentsResponse,
} from "@/src/lib/apis/order/Order.types";
import { useState } from "react";
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";

const comments: IOrderCommentsResponse = {
  contents: [
    {
      id: 0,
      authorName: "우리기술",
      content: "안녕하세요",
      createdAt: "12월 1일",
    },
    {
      id: 1,
      authorName: "금오레이저",
      content: "안녕하십니까",
      createdAt: "12월 1일",
    },
    { id: 2, authorName: "우리기술", content: "안녕", createdAt: "12월 1일" },
    { id: 3, authorName: "금오레이저", content: "안녕", createdAt: "12월 1일" },
    { id: 4, authorName: "금오레이저", content: "후후", createdAt: "12월 1일" },
  ],
  totalElements: 4,
};

export default function OrderCommentMenu() {
  const [inputFocus, setInputFocus] = useState(false);
  const inputArgs = useInputWithMaxLength(200);

  const onSend = () => {
    inputArgs.setValue("");
  };

  return (
    <S.Wrapper className="flex-column-start">
      <S.Label className="bold20">댓글</S.Label>
      <S.CommentsWrapper>
        {comments.totalElements == 0 && (
          <EmptyComment className="flex-center regular14">
            아직 댓글이 없습니다
          </EmptyComment>
        )}
        {comments.totalElements !== 0 &&
          comments.contents.map((el) => (
            <OrderCommentItem data={el} key={el.id} />
          ))}
      </S.CommentsWrapper>
      <S.InputWrapper className="flex-row-between" isFocus={inputFocus}>
        <S.CommentInput
          placeholder="댓글 작성.."
          className="regular12"
          value={inputArgs.value}
          onChange={inputArgs.onChange}
          maxLength={200}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        {inputArgs.value.length > 0 && <SendIcon size={24} onSend={onSend} />}
      </S.InputWrapper>
    </S.Wrapper>
  );
}

interface IOrderCommentItemProps {
  data: IOrderComment;
}

function OrderCommentItem({ data }: IOrderCommentItemProps) {
  return (
    <S.CommentItemWrapper>
      <S.CommentWritter className="regular12">
        {data.authorName}
      </S.CommentWritter>
      <S.CommentWrapper>
        <p className="regular14">{data.content}</p>
        <S.CommentDate className="regular10">{data.createdAt}</S.CommentDate>
      </S.CommentWrapper>
    </S.CommentItemWrapper>
  );
}

const EmptyComment = styled.p`
  width: 100%;
  height: 100%;
`;
