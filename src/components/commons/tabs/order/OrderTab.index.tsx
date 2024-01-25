import * as S from "./OrderTab.styles";
import { IOrderTabProps } from "./OrderTab.types";

export default function OrderTab({
  tabs,
  selectedTab,
  onTabClick,
}: IOrderTabProps) {
  return (
    <S.Wrapper className="flex-center">
      {tabs.map((el) => (
        <S.TabItem
          className="bold20"
          key={el}
          isSelect={el === selectedTab}
          onClick={() => onTabClick(el)}
        >
          {el}
        </S.TabItem>
      ))}
    </S.Wrapper>
  );
}
