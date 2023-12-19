import { ISearchbarProps } from "../Searchbar.types";
import * as S from "../Searchbar.styles";
import SearchIcon from "../../icons/SearchIcon.index";

export default function LoadOrderSearchbar(props: ISearchbarProps) {
  return (
    <S.Searchbar className="flex-row-center">
      <S.SearchbarInput
        className="medium16"
        width="100%"
        placeholder={props.placeholder}
        onChange={props.onChangeSearchBar}
        onKeyDown={props.onActiveEnter}
      />
      <S.IconWrapper onClick={props.onSearchKeyword}>
        <SearchIcon size={24} />
      </S.IconWrapper>
    </S.Searchbar>
  );
}
