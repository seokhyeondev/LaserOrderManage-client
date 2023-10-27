import { ChangeEvent, KeyboardEvent, useState } from "react";

export const useSearchbar = (refetch: () => void) => {
  const [keyword, setKeyword] = useState("");

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  const onActiveEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      refetch();
    }
  };

  const onSearchKeyword = () => {
    refetch();
  };

  return {
    keyword,
    onChangeSearchBar,
    onActiveEnter,
    onSearchKeyword,
  };
};
