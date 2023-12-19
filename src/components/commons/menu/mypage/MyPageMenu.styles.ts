import styled from "@emotion/styled";
import { IMenuItemTitleProps } from "./MyPageMenu.types";

export const Wrapper = styled.div`
  width: 360px;
  height: calc(100vh - 80px);
  padding: 60px 34px;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.1);
  background-color: var(--color-white);
`;

export const BodyWrapper = styled.div`
  flex-grow: 1;
`;

export const Name = styled.p`
  width: 100%;
  text-align: center;
`;

export const Company = styled.p`
  width: 100%;
  text-align: center;
  color: var(--color-normalGray);
`;

export const MenuItemWrapper = styled.div`
  width: 100%;
  padding: 16px 14px;
  margin-bottom: 18px;
  transition: all ease 0.5s;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: var(--color-lightGray);
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const MenuItemTitle = styled.p<IMenuItemTitleProps>`
  color: ${(props) =>
    props.isActive ? "var(--color-primary)" : "var(--color-darkGray)"};
`;

export const SignoutWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid var(--color-mediumGray);
  background-color: var(--color-lightGray);
  border-radius: var(--border-radius);
  cursor: pointer;
`;

export const SignoutTitle = styled.p`
  color: var(--color-darkGray);
`;
