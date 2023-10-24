import {
  ActiveBar,
  Bar,
  BarWrapper,
  Circle,
  CircleWrapper,
  Label,
  LabelWrapper,
  Wrapper,
} from "./OrderProgressbar.styles";
import { STAGE } from "../../filters/order/OrderFilterQueries";
import { IOrderProgressbarProps } from "./OrderProgressbar.types";

export default function OrderProgressbar(props: IOrderProgressbarProps) {
  return (
    <Wrapper>
      <LabelWrapper className="flex-row-between-center">
        {STAGE.filters.map((el) => (
          <Label
            key={el.value}
            className="regular10"
            isActive={props.stage === el.name}
          >
            {el.name}
          </Label>
        ))}
      </LabelWrapper>
      <BarWrapper className="flex-column">
        <Bar />
        <ActiveBar
          percentage={
            STAGE.filters.find((filter) => filter.name === props.stage)
              ?.percentage ?? "0"
          }
        />
        <CircleWrapper className="flex-row-between-center">
          {STAGE.filters.map((el) => (
            <Circle key={el.value} isActive={props.stage === el.name} />
          ))}
        </CircleWrapper>
      </BarWrapper>
    </Wrapper>
  );
}
