import * as S from "./OrderDetailSection.styles";

import styled from "@emotion/styled";

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

const URGENT_SELECT = [
  { key: "general", name: "일반 거래" },
  { key: "urgent", name: "긴급 거래" },
];

export default function UrgentSection() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title className="bold18">긴급 거래 설정</S.Title>
      </S.TitleWrapper>
      <div className="flex-row">
        {URGENT_SELECT.map((el) => (
          <UrgentSelect
            className="medium16 flex-center"
            isSelect={true}
            key={el.key}
          >
            {el.name}
          </UrgentSelect>
        ))}
      </div>
    </S.Wrapper>
  );
}
