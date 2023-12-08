import styled from "@emotion/styled";

interface IMenuItemProps {
  isFocus: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 15px 20px 15px;
  border: 1px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const Label = styled.p`
  margin-bottom: 26px;
`;

export const MenuItem = styled.div<IMenuItemProps>`
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  padding-inline: 20px;
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.isFocus ? "var(--color-primary)" : "var(--color-white)"};
  color: ${(props) =>
    props.isFocus ? "var(--color-white)" : "var(--color-black)"};
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isFocus ? "var(--color-primary)" : "var(--color-lightGray)"};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
