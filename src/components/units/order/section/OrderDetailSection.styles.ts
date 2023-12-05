import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.p``;

export const EditBox = styled.div`
  cursor: pointer;
`;

export const EditBoxText = styled.p`
  color: var(--color-darkGray);
`;

export const Section = styled.div`
  border-top: 2px solid var(--color-black);
  border-bottom: 2px solid var(--color-mediumGray);
`;

export const InfoWrapper = styled.div`
  padding: 10px 0;
`;

export const Label = styled.div`
  color: var(--color-darkGray);
  width: 120px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const SideWrapper = styled.div`
  background-color: var(--color-lightGray);
`;

export const SideBox = styled.div`
  width: 300px;
  padding: 18px 12px;
  border-bottom: 1px solid var(--color-mediumGray);
  &:last-of-type {
    border-bottom: none;
  }
`;

export const SideLabel = styled.p`
  color: var(--color-darkGray);
  margin-bottom: 6px;
`;

export const SideContent = styled.p`
  width: 100%;
  text-align: end;
`;
