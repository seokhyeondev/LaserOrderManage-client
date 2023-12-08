import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const BodyWrapper = styled.div`
  width: calc(100% - 340px);
  padding: 48px 48px 448px 48px;
`;

interface IMenuWrapperProps {
  expanded: boolean;
}

export const MenuWrapper = styled.div<IMenuWrapperProps>`
  position: fixed;
  top: ${(props) => (props.expanded ? "0px" : "auto")};
  right: 0;
  width: 340px;
  padding: 10px;
  height: 100vh;
  transition: top ease 0.5s;
`;
