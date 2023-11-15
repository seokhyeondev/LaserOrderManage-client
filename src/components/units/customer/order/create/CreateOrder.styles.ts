import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 42px 80px;
  background-color: var(--color-lightGray);
`;

export const BodyWrapper = styled.div``;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const LoadWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: var(--color-white);
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;

export const LoadInfoWrapper = styled.div`
  height: 100%;
`;

export const LoadButton = styled.button`
  width: 120px;
  height: 60px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
`;

export const FormWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: var(--color-white);
  border: 2px solid var(--color-mediumGray);
  border-radius: var(--border-radius);
`;
