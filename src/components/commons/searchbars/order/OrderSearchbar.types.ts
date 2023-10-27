import { ChangeEvent, KeyboardEvent } from "react";

export interface IOrderSearchbarProps {
  placeholder: string;
  keyword: string;
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
  onActiveEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSearchKeyword: () => void;
}
