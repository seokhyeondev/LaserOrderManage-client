import { ISearchbarProps } from "../Searchbar.types";
import * as S from "../Searchbar.styles";
import Image from "next/image";

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
        <Image
          src="/images/search.svg"
          width={24}
          height={24}
          alt="검색 아이콘"
        />
      </S.IconWrapper>
    </S.Searchbar>
  );
}
