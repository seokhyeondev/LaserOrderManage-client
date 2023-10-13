import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
`;

export const ImageWrapper = {
  borderRadius: "10px",
  marginRight: "36px",
};

export const InfoWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
`;

export const StageLabel = styled.p`
  color: var(--color-darkGray);
  margin-bottom: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
`;

export const OrderName = styled.p`
  margin-right: 7px;
`;

export const OrderRequest = styled.a`
  text-decoration: underline;
  padding-bottom: 3px;
`;

export const InfoContentWrapper = styled.div`
  flex: 1;
  margin-bottom: 17px;

  &:last-of-type {
    margin: 0;
  }
`;

export const InfoLabel = styled.p`
  color: var(--color-normalGray);
  margin-right: 15px;
`;
