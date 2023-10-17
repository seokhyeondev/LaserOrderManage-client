import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 200px;
`;

export const Page = styled.span`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 40px;
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;

  &:last-of-type {
    margin: 0;
  }
`;
