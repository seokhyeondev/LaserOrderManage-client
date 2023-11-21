import { ChangeEvent, KeyboardEvent } from "react";

export interface ISearchbarProps {
  placeholder: string;
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
  onActiveEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSearchKeyword: () => void;
}
