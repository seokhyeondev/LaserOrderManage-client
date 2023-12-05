import Spacer from "@/src/components/commons/spacer/Spacer.index";
import * as S from "./OrderDetailSection.styles";
import { RefObject } from "react";

interface IOrderInfoSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
}

export default function OrderInfoSection(props: IOrderInfoSectionProps) {
  return (
    <S.Wrapper ref={props.sectionRef}>
      <p className="medium20">견적 대기</p>
      <Spacer width="100%" height="10px" />
      <S.TitleWrapper>
        <S.Title className="bold28">기계 시스템 제작 프로젝트</S.Title>
      </S.TitleWrapper>
      <S.Section>
        <Spacer width="100%" height="20px" />
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">작업 범위</S.Label>
          <S.Content className="regular16">레이저 가공</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">후처리 서비스</S.Label>
          <S.Content className="regular16">도색</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">생성 일자</S.Label>
          <S.Content className="regular16">2023. 11. 16</S.Content>
        </S.InfoWrapper>
        <S.InfoWrapper className="flex-row">
          <S.Label className="regular16">요청 사항</S.Label>
          <S.Content className="regular16">
            빠른 제작 부탁드립니다. 빠른 제작 부탁드립니다. 빠른 제작
            부탁드립니다. 빠른 제작 부탁드립니다. 빠른 제작 부탁드립니다. 빠른
            제작 부탁드립니다. 빠른 제작 부탁드립니다. 빠른 제작 부탁드립니다.
            빠른 제작 부탁드립니다. 빠른 제작 부탁드립니다. 빠른 제작
            부탁드립니다. 빠른 제작 부탁드립니다.
          </S.Content>
        </S.InfoWrapper>
        <Spacer width="100%" height="20px" />
      </S.Section>
    </S.Wrapper>
  );
}
