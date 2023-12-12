import styled from "@emotion/styled";

interface IWrapperProps {
  width: number;
  height?: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  padding: 30px 24px 14px 24px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const Title = styled.p`
  margin-bottom: 40px;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.p``;
export const Required = styled.p`
  color: var(--color-alert);
  margin-left: 3px;
`;

interface IInputWrapperProps {
  focusable?: boolean;
}

export const InputWrapper = styled.div<IInputWrapperProps>`
  width: 100%;
  padding: 15px 14px;
  margin-bottom: 44px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  cursor: ${(props) => (props.focusable ? "pointer" : "none")};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

interface IInputProps {
  underline?: boolean;
}

export const Input = styled.input<IInputProps>`
  width: 100%;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  &::placeholder {
    color: var(--color-normalGray);
  }
  &:read-only {
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 14px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  appearance: none;
  margin-bottom: 44px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Option = styled.option``;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: var(--color-lightGray);
  color: var(--color-darkGray);
  border-radius: var(--border-radius);
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? "var(--color-mediumGray)" : "var(--color-primary)"};
  color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 260px;
  padding: 15px 14px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  resize: none;
  &::placeholder {
    color: var(--color-normalGray);
  }
`;

export const AddressItemsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;

interface IAddressItemWrapperProps {
  isSelect: boolean;
}

export const AddressItemWrapper = styled.div<IAddressItemWrapperProps>`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid
    ${(props) =>
      props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  cursor: pointer;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const BasicAddressLabel = styled.p`
  width: 70px;
  height: 24px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);
`;

export const AddressUserInfo = styled.p`
  color: var(--color-normalGray);
`;

export const FileName = styled.p`
  width: 100%;
  text-align: center;
`;

export const UploadAnnounce = styled.p`
  color: var(--color-normalGray);
`;

export const UploadArea = styled.div`
  width: 100%;
  height: 180px;
  border: 1px dotted var(--color-normalGray);
  border-radius: var(--border-radius);
  transition: all ease 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--color-lightGray);
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadDrawingsWrapper = styled.div`
  width: 100%;
  height: 420px;
  overflow-y: auto;
`;
