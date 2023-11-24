import { ISearchbarProps } from "../Searchbar.types";
import { IconWrapper, Searchbar, SearchbarInput } from "../Searchbar.styles";
import Image from "next/image";

export default function OrderSearchbar(props: ISearchbarProps) {
  return (
    <Searchbar className="flex-row-center">
      <SearchbarInput
        className="medium16"
        width="400px"
        placeholder={props.placeholder}
        onChange={props.onChangeSearchBar}
        onKeyDown={props.onActiveEnter}
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
