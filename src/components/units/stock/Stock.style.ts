import styled from "@emotion/styled";
import exp from "constants";

export const Wrapper = styled.div`
  width: 100%;
  padding: 25px 30px 24px 30px;
  border-top: 1px solid var(--color-mediumGray);
  border-bottom: 1px solid var(--color-mediumGray);
`;

export const HeaderWrapper = styled.div`
  & > h1 {
    text-align: center;
    font-size: 40px;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  padding: 18px 31px;
  gap: 48px;
`;
export const Tab = styled.button<{ isActived: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  ${(props) =>
    props.isActived
      ? "color: var(--color-black)"
      : "color: var(--color-normalGray)"}
`;
