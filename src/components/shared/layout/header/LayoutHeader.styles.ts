import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 1100px;
  height: 80px;
  background-color: var(--color-white);
  padding: 0 80px;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  flex-shrink: 0;
`;

export const MenuWrapper = styled.div`
  margin-left: 60px;
  gap: 50px;
`;

export const HeaderButton = styled.button`
  width: 100px;
  height: 45px;
  flex-shrink: 0;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: var(--color-white);
`;
