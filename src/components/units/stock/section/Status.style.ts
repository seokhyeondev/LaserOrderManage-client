import styled from "@emotion/styled";

export const BodyWrapper = styled.div``;

export const BodyHeader = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 10px;
  & > a {
    display: inline-flex;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`;

export const FilterLabel = styled.p`
  width: 110px;
`;

export const Filter = styled.a`
  margin-right: 30px;
  color: ${(props: any) =>
    props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};

  &:last-of-type {
    margin: 0;
  }
`;

export const FilterSmall = styled.a`
  margin-right: 16px;
  color: ${(props: any) =>
    props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};

  &:last-of-type {
    margin: 0;
  }
`;

export const DateInputWrapper = styled.div`
  margin-top: 10px;
`;

export const DateInputDivier = styled.p`
  color: var(--color-normalGray);
  margin-left: 6px;
  margin-right: 6px;
`;

export const Table = styled.table`
  margin-top: 11px;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  border: 1px solid var(--color-mediumGray);
  & > tr {
    height: 50px;
  }
  & > tr > th {
    border-right: 1px solid var(--color-mediumGray);
    border-bottom: 1px solid var(--color-mediumGray);

    text-align: center;
  }
`;

export const TableBody = styled.tbody`
  & > tr {
    height: 50px;
  }
  & > tr > td {
    border: 1px solid var(--color-mediumGray);

    text-align: center;
    font-weight: 500;
  }
`;
