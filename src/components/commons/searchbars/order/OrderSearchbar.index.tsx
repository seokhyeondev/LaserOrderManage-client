import { IOrderSearchbarProps } from "./OrderSearchbar.types";
import {
  IconWrapper,
  Searchbar,
  SearchbarInput,
} from "./OrderSearchbar.styles";
import Image from "next/image";

export default function OrderSearchbar(props: IOrderSearchbarProps) {
  return (
    <Searchbar className="flex-row-center">
      <SearchbarInput
        className="medium16"
        placeholder={props.placeholder}
        onChange={props.onChangeSearchBar}
        onKeyDown={props.onActiveEnter}
        value={props.keyword}
      />
      <IconWrapper onClick={props.onSearchKeyword}>
        <Image
          src="/images/search.svg"
          width={24}
          height={24}
          alt="검색 아이콘"
        />
      </IconWrapper>
    </Searchbar>
  );
}
