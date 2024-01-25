import * as S from "./OrderProgressbar.styles";
import { IOrderProgressbarProps } from "./OrderProgressbar.types";
import { OrderStatus } from "@/src/lib/apis/order/Order.types";

const STATUSES: OrderStatus[] = [
  "견적 대기",
  "견적 승인",
  "제작 중",
  "제작 완료",
  "거래 완료",
];

const PercentageMap = new Map<OrderStatus, number>([
  ["견적 대기", 0],
  ["견적 승인", 25],
  ["제작 중", 50],
  ["제작 완료", 75],
  ["거래 완료", 100],
]);

export default function OrderProgressbar({ stage }: IOrderProgressbarProps) {
  return (
    <S.Wrapper>
      <S.LabelWrapper className="flex-row-between-center">
        {STATUSES.map((el) => (
          <S.Label key={el} className="regular10" isActive={stage === el}>
            {el}
          </S.Label>
        ))}
      </S.LabelWrapper>
      <S.BarWrapper className="flex-column">
        <S.Bar />
        <S.ActiveBar percentage={PercentageMap.get(stage)!!} />
        <S.CircleWrapper className="flex-row-between-center">
          {STATUSES.map((el) => (
            <S.Circle key={el} isActive={stage === el} />
          ))}
        </S.CircleWrapper>
      </S.BarWrapper>
    </S.Wrapper>
  );
}
