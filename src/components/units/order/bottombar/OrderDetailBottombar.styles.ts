import styled from "@emotion/styled";

interface IWrapperProps {
  show: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: fixed;
  left: 48px;
  right: 388px;
  bottom: ${(props) => (props.show ? "0px" : "-100px")};
  height: 100px;
  padding-inline: 36px;
  border: 2px solid var(--color-mediumGray);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  background-color: var(--color-white);
  transition: bottom ease 0.5s;
`;

export const Announce = styled.p``;

export const BottombarButton = styled.button`
  width: 160px;
  height: 60px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);
`;
