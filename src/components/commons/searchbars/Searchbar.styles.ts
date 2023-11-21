import styled from "@emotion/styled";

export const Searchbar = styled.div`
  position: relative;
`;

interface ISearchbarInputProps {
  width: string;
}

export const SearchbarInput = styled.input<ISearchbarInputProps>`
  width: ${(props) => props.width};
  height: 50px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
  padding: 0 16px;
  margin-bottom: 23px;
  color: var(--color-darkGray);

  ::placeholder {
    color: var(--color-normalGray);
  }

  :focus {
    border: 1px solid var(--color-darkGray);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 13px;
  cursor: pointer;
`;
