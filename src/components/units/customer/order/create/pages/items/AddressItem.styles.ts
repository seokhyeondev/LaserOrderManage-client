import styled from "@emotion/styled";
import { IFormSelectProps } from "../../CreateOrder.types";

export const AddressItem = styled.div<IFormSelectProps>`
  width: 100%;
  height: 90px;
  padding: 20px 25px;
  border: 1px solid
    ${(props) =>
      props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  margin-bottom: 20px;
  transition: all ease 0.3s;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const AddressUserInfo = styled.p`
  color: var(--color-normalGray);
`;

export const BasicAddressLabel = styled.span`
  width: 70px;
  height: 24px;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-primary);
`;
