import {
  Filter,
  FilterLabel,
  FilterWrapper,
  HeaderWrapper,
  RedoIconWrapper,
  Wrapper,
} from "../OrderFilter.styles";
import Image from "next/image";
import { MANUFACTURING, STAGE } from "../OrderFilterQueries";

const FILTERS = [
  { index: 0, content: STAGE },
  { index: 1, content: MANUFACTURING },
];

export default function OrderFilter() {
  return (
    <Wrapper>
      <HeaderWrapper className="flex-row-between">
        <p className="bold16">검색 필터</p>
        <a className="flex-row-center">
          <RedoIconWrapper>
            <Image
              width={16}
              height={16}
              src="/images/redo.svg"
              alt="초기화 아이콘"
            />
          </RedoIconWrapper>
          <p className="medium16">필터 초기화</p>
        </a>
      </HeaderWrapper>
      {FILTERS.map((el) => (
        <FilterWrapper className="flex-row" key={el.index}>
          <FilterLabel className="medium16">{el.content.title}</FilterLabel>
          {el.content.filters.map((filter) => (
            <Filter className="medium16">{filter.name}</Filter>
          ))}
        </FilterWrapper>
      ))}
    </Wrapper>
  );
}
