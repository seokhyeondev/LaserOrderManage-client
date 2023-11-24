import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  padding: 25px;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const Title = styled.p``;

export const Label = styled.p``;

export const Required = styled.p`
  color: var(--color-alert);
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  ::placeholder {
    color: var(--color-normalGray);
  }
  :focus {
    border: 1px solid var(--color-black);
  }
`;

export const AddressInputWrapper = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 10px 0 15px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const AddressInput = styled.input`
  width: 100%;
  ::placeholder {
    color: var(--color-normalGray);
  }
`;

export const SearchButton = styled.button`
  width: 70px;
  height: 35px;
  color: var(--color-white);
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
`;

export const CheckArea = styled.div`
  cursor: pointer;
`;

interface ICheckLabelProps {
  isChecked: boolean;
}

export const CheckLabel = styled.p<ICheckLabelProps>`
  color: ${(props) => props.isChecked ? "var(--color-primary)" : "var(--color-normalGray)"};
`

interface ISubmitButtonProps {
  isActive: boolean;
}

export const SubmitButton = styled.button<ISubmitButtonProps>`
  flex-grow: 1;
  height: 50px;
  color: var(--color-white);
  background-color: ${(props) =>
    props.isActive ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
`;

export const CancelButton = styled.button`
  flex-grow: 1;
  height: 50px;
  color: var(--color-darkGray);
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
`;
