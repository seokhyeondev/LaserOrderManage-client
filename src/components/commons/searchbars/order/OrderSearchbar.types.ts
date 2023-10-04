import { ChangeEvent } from "react";

export interface IOrderSearchbarProps {
  placeholder: string;
  onChangeSearchBar: (event: ChangeEvent<HTMLInputElement>) => void;
}
