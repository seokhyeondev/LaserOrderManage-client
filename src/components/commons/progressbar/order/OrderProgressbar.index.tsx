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

export default function OrderProgressbar() {
  return (
    <Wrapper>
      <LabelWrapper className="flex-row-between">
        {STAGE.filters.map((el) => (
          <Label key={el.value} className="regular10">
            {el.name}
          </Label>
        ))}
      </LabelWrapper>
      <BarWrapper className="flex-column">
        <Bar />
        <ActiveBar />
        <CircleWrapper className="flex-row-between">
          {STAGE.filters.map((el) => (
            <Circle key={el.value} />
          ))}
        </CircleWrapper>
      </BarWrapper>
    </Wrapper>
  );
}
