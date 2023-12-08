import { useState } from "react";
import * as S from "./OrderDetailSection.styles";
import styled from "@emotion/styled";
import { IUrgentSectionProps } from "./DetailSection.types";

const URGENT_SELECT = [
  { status: false, name: "일반 거래" },
  { status: true, name: "긴급 거래" },
];

export default function UrgentSection({ isUrgent }: IUrgentSectionProps) {
  const [selectStatus, setSelectStatus] = useState(isUrgent);

  const onSelect = (status: boolean) => {
    if (status !== selectStatus) {
      setSelectStatus(status);
    }
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title className="bold18">긴급 거래 설정</S.Title>
      </S.TitleWrapper>
      <div className="flex-row">
        {URGENT_SELECT.map((el) => (
          <UrgentSelect
            className="medium16 flex-center"
            isSelect={el.status === selectStatus}
            key={el.name}
            onClick={() => onSelect(el.status)}
          >
            {el.name}
          </UrgentSelect>
        ))}
      </div>
    </S.Wrapper>
  );
}

interface IUrgentSelectProps {
  isSelect: boolean;
}

const UrgentSelect = styled.p<IUrgentSelectProps>`
  width: 100px;
  height: 45px;
  margin-right: 15px;
  color: ${(props) =>
    props.isSelect ? "var(--color-primary)" : "var(--color-normalGray)"};
  border: 1px solid
    ${(props) =>
      props.isSelect ? "var(--color-primary)" : "var(--color-mediumGray)"};
  border-radius: var(--border-radius);
  transition: all ease 0.3s;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;
