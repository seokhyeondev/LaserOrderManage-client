import styled from "@emotion/styled";

interface IWrapperProps {
  expanded: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: ${(props) => (props.expanded ? "100%" : "calc(100% - 380px)")};
  padding: 30px 15px 18px 15px;
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  background-color: var(--color-lightGray);
  transition: height ease 0.5s;
`;

export const Label = styled.p``;

export const CommentsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-top: 20px;
  padding-bottom: 10px;
  overflow-y: auto;
`;

interface IInputWrapperProps {
  isFocus: boolean;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid
    ${(props) =>
      props.isFocus ? "var(--color-normalGray)" : "var(--color-mediumGray)"};
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

export const EmptyComment = styled.p`
  width: 100%;
  height: 100%;
`;
