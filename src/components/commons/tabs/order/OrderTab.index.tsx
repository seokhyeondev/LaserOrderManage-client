import * as S from "./OrderTab.styles";
import { IOrderTabProps } from "./OrderTab.types";

export default function OrderTab(props: IOrderTabProps) {
  return (
    <S.Wrapper className="flex-center">
      {props.tabs.map((el) => (
        <S.TabItem
          className="bold20"
          key={el.value}
          isSelect={el === props.selectedTab}
          onClick={() => props.onTabClick(el)}
        >
          {el.name}
        </S.TabItem>
      ))}
    </S.Wrapper>
  );
}
