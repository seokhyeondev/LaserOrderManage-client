import styled from "@emotion/styled";
import { IPageProps } from "../Pagination.types";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
`;

export const Page = styled.span`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 40px;
  background-color: ${(props: IPageProps) =>
    props.isActive ? "var(--color-primary)" : "var(--color-white)"};
  color: ${(props: IPageProps) =>
    props.isActive ? "var(--color-white)" : "var(--color-darkGray)"};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  transition: all 0.2s ease;

  &:last-of-type {
    margin: 0;
  }
`;
