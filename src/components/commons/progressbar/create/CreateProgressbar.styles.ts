import styled from "@emotion/styled";
import { IMenuProp } from "./CreateProgressbar.types";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const TitleWrapper = styled.div``;

export const ProgressCircle = styled.div<IMenuProp>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${(prop) =>
    prop.status === "DONE"
      ? "var(--color-darkGray)"
      : prop.status === "PROGRESS"
      ? "var(--color-primary)"
      : "var(--color-mediumGray)"};
`;

export const ProgressNumber = styled.p`
  color: var(--color-white);
`;

export const MenuTitle = styled.p<IMenuProp>`
  color: ${(prop) =>
    prop.status === "DONE"
      ? "var(--color-darkGray)"
      : prop.status === "PROGRESS"
      ? "var(--color-primary)"
      : "var(--color-mediumGray)"};
`;

export const SubMenuTitle = styled.p<IMenuProp>`
  padding-left: 42px;
  margin-top: 24px;
  color: ${(prop) =>
    prop.status === "DONE"
      ? "var(--color-darkGray)"
      : prop.status === "PROGRESS"
      ? "var(--color-primary)"
      : "var(--color-mediumGray)"};
  &:first-of-type {
    margin-top: 17px;
  }
`;
