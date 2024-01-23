import * as S from "./OrderCommentMenu.styles";
import SendIcon from "../../icons/SendIcon.index";
import {
  IOrderComment,
  IOrderCommentRequest,
} from "@/src/lib/apis/order/detail/OrderDetail.types";
import { RefObject, useEffect, useRef, useState } from "react";
import { useInputWithMaxLength } from "@/src/lib/hooks/useInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderDetailApi } from "@/src/lib/apis/order/detail/OrderDetailApi";
import { getDateTime } from "@/src/lib/utils/utils";
import { AxiosError } from "axios";
import { IHttpStatus } from "@/src/lib/apis/axios";
import { useToastify } from "@/src/lib/hooks/useToastify";

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
  const { setToast } = useToastify();
  const lastCommentRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`orderDetailComments/${orderId}`],
    queryFn: () => OrderDetailApi.GET_ORDER_COMMENTS(orderId),
  });

  useEffect(() => {
    if (data && !isLoading) {
      lastCommentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [data, isLoading]);

  const { mutate } = useMutation({
    mutationFn: OrderDetailApi.POST_ORDER_COMMENT,
    onSuccess: () => {
      setSending(false);
      inputArgs.setValue("");
      refetch();
    },
    onError: (error: AxiosError) => {
      setSending(false);
      if (error.response) {
        const status = error.response.data as IHttpStatus;
        if (status.errorCode === "-302") {
          setToast({ comment: "댓글 작성 권한이 없어요" });
        }
      }
    },
  });

  const onSend = () => {
    if (sending) return;
    if (inputArgs.value === "") return;
    setSending(true);
    const payload: IOrderCommentRequest = {
      content: inputArgs.value,
    };
    mutate({ id: orderId, paylod: payload });
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
          data.contents.map((el, index) => (
            <OrderCommentItem
              data={el}
              key={el.id}
              itmeRef={index === data.totalElements - 1 ? lastCommentRef : null}
            />
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
  itmeRef: RefObject<HTMLDivElement> | null;
}

function OrderCommentItem({ data, itmeRef }: IOrderCommentItemProps) {
  return (
    <S.CommentItemWrapper ref={itmeRef}>
      <S.CommentWritter className="regular12">
        {data.authorName}
      </S.CommentWritter>
      <S.CommentWrapper>
        <S.CommentContent className="regular14">
          {data.content}
        </S.CommentContent>
        <S.CommentDate className="regular10">
          {getDateTime(data.createdAt)}
        </S.CommentDate>
      </S.CommentWrapper>
    </S.CommentItemWrapper>
  );
}
