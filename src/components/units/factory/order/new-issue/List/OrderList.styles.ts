import styled from "@emotion/styled";
import { IQuotationLabelProps } from "./OrderList.types";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-right: 36px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  padding-top: 12px;
`;

export const QuotationLabel = styled.div`
  color: ${(props: IQuotationLabelProps) =>
    props.isComplete ? "var(--color-blue)" : "var(--color-alert)"};
  margin-bottom: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
`;

export const OrderName = styled.p`
  margin-right: 7px;
`;

export const OrderUrgent = styled.p`
  color: var(--color-primary);
  margin-right: 6px;
  padding-bottom: 3px;
`;

export const OrderRequest = styled.a`
  text-decoration: underline;
  padding-bottom: 3px;
`;

export const InfoContentWrapper = styled.div`
  flex: 1;
  margin-bottom: 18px;

  &:last-of-type {
    margin: 0;
  }
`;

export const InfoLabel = styled.p`
  color: var(--color-normalGray);
  margin-right: 15px;
`;
