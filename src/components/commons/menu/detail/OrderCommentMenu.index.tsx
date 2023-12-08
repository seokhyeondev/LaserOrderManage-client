import * as S from "./OrderCommentMenu.styles";
import SendIcon from "../../icons/SendIcon.index";
import { IOrderComment } from "@/src/lib/apis/order/detail/OrderDetail.types";
import { useState } from "react";
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";
import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/src/lib/apis/order/OrderApi";
import { getDate } from "@/src/lib/utils/utils";

interface IOrderCommentMenuProps {
  expanded: boolean;
  orderId: string;
}

export default function OrderCommentMenu({
  expanded,
  orderId,
}: IOrderCommentMenuProps) {
  const [inputFocus, setInputFocus] = useState(false);
  const inputArgs = useInputWithMaxLength(200);

  const { data } = useQuery({
    queryKey: ["orderDetailComments"],
    queryFn: () => OrderApi.GET_ORDER_COMMENTS(orderId),
  });

  const onSend = () => {
    inputArgs.setValue("");
  };

  return (
    <S.Wrapper className="flex-column-start" expanded={expanded}>
      <S.Label className="bold20">댓글</S.Label>
      <S.CommentsWrapper>
        {data?.totalElements == 0 && (
          <S.EmptyComment className="flex-center regular14">
            아직 댓글이 없습니다
          </S.EmptyComment>
        )}
        {data &&
          data.totalElements !== 0 &&
          data.contents.map((el) => <OrderCommentItem data={el} key={el.id} />)}
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
        <S.CommentDate className="regular10">
          {getDate(data.createdAt)}
        </S.CommentDate>
      </S.CommentWrapper>
    </S.CommentItemWrapper>
  );
}
