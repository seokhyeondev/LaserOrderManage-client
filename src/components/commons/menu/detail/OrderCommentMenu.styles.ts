import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 400px);
  padding: 30px 15px 18px 15px;
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  background-color: var(--color-lightGray);
`;

export const Label = styled.p``;

export const CommentsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-top: 20px;
  padding-bottom: 10px;
  overflow-y: auto;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 18px 15px 10px 15px;
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
`;

export const CommentInput = styled.textarea`
  width: 100%;
  resize: none;
  &::placeholder {
    color: var(--color-normalGray);
  }
`;

export const CommentItemWrapper = styled.div`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CommentWritter = styled.p`
  margin-bottom: 8px;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  padding: 15px 15px 8px 15px;
  background-color: var(--color-white);
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const CommentDate = styled.p`
  width: 100%;
  margin-top: 8px;
  text-align: end;
  color: var(--color-darkGray);
`;
