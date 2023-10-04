import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoWrapper = styled.a`
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 60px;
`;

export const MenuItem = styled.div`
  margin: 0 60px 0 0;
  cursor: pointer;
`;

export const HeaderButton = styled.button`
  width: 100px;
  height: 45px;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;
`;
