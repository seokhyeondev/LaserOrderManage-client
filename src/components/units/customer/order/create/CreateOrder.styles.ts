import styled from "@emotion/styled";
import { IFormSelectProps, INextButtonProps } from "./CreateOrder.types";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 42px 80px;
  background-color: var(--color-lightGray);
`;

export const BodyWrapper = styled.div``;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const LoadWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: var(--color-white);
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  transition: all ease 0.3s;
`;

export const LoadInfoWrapper = styled.div`
  height: 100%;
`;

export const LoadButton = styled.button`
  width: 120px;
  height: 60px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const FormWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: var(--color-white);
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const FormBodyWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 45px 30px;
`;

export const FormTitle = styled.p``;

export const FormLabel = styled.p``;

export const RequiredLabel = styled.p`
  color: var(--color-alert);
  margin-left: 7px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 18px 25px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  ::placeholder {
    color: var(--color-normalGray);
  }
`;

export const FormInputLength = styled.p`
  width: 100%;
  color: var(--color-darkGray);
  padding-right: 6px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  line-height: 24px;
  padding: 20px 16px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  resize: none;
  ::placeholder {
    color: var(--color-normalGray);
  }
`;

export const FormSelect = styled.p<IFormSelectProps>`
  width: 140px;
  height: 40px;
  color: ${(props) =>
    props.isSelect ? "var(--color-primary)" : "var(--color-darkGray)"};
  border: 1px solid
    ${(props) =>
      props.isSelect ? "var(--color-primary)" : "var(--color-normalGray)"};
  border-radius: var(--border-radius);
  margin-right: 15px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const UploadAnnounce = styled.p`
  color: var(--color-normalGray);
  margin-top: 10px;
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

export const NewAddressLabel = styled.a`
  color: var(--color-primary);
  :hover {
    text-decoration: underline;
  }
`;

export const FormButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid var(--color-mediumGray);
  padding: 0 30px;
`;

export const NextButton = styled.button<INextButtonProps>`
  width: 200px;
  height: 60px;
  color: var(--color-white);
  background-color: ${(props) =>
    props.enabled ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  transition: all ease 0.3s;
`;

export const BackButton = styled.button`
  width: 140px;
  height: 60px;
  color: var(--color-darkGray);
  background-color: var(--color-white);
  border: 1px solid var(--color-normalGray);
  border-radius: var(--border-radius);
  margin-right: 18px;
`;
