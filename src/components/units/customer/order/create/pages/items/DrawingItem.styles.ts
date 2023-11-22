import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 25px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const InfoWrapper = styled.div``;

export const Thumbnail = {
  borderRadius: "10px",
};

export const DetailWrapper = styled.div`
  height: 100%;
  padding-top: 8px;
`;

export const FileSize = styled.p`
  color: var(--color-normalGray);
`;

export const Label = styled.p``;
export const Required = styled.p`
  color: var(--color-alert);
  margin-left: 5px;
`;

interface IInputWrapperProps {
  isFocus: boolean;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  width: 200px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid
    ${(props) =>
      props.isFocus ? "var(--color-black)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
`;

export const Input = styled.input`
  width: 100%;
  ::placeholder {
    color: var(--color-normalGray);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 280px;
  height: 32px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  padding: 0 12px;
  appearance: none;
`;

export const Option = styled.option``;

export const DeleteIcon = {
  cursor: "pointer",
};
