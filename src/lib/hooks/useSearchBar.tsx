import { ChangeEvent, KeyboardEvent, useState } from "react";

export const useSearchbar = () => {
  const [keyword, setKeyword] = useState("");

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value);
  };

  const onActiveEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert(keyword);
    }
  };

  return {
    keyword,
    onChangeSearchBar,
    onActiveEnter,
  };
};
