import { ISearchbarProps } from "../Searchbar.types";
import { IconWrapper, Searchbar, SearchbarInput } from "../Searchbar.styles";
import SearchIcon from "../../icons/SearchIcon.index";

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
        <SearchIcon size={24} />
      </IconWrapper>
    </Searchbar>
  );
}
