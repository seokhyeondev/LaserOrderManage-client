import { useState } from "react";

export const useOrderFilter = () => {
  const [filterMap, setFilterMap] = useState(new Map<string, string[]>());

  const onResetFilter = () => {
    setFilterMap(new Map<string, string[]>());
  };

  const onFilterClick = (value: string) => {
    const filteredList = filterMap.get(value) ?? [];
    const isSelected = filteredList.includes(value);
    if (isSelected) {
      const selectedIndex = filteredList.indexOf(value);
      filteredList.splice(selectedIndex, 1);
    } else {
      filteredList.push(value);
    }
    const updatedMap = filterMap.set(value, filteredList);
    setFilterMap(new Map(updatedMap));
  };

  return { filterMap, onResetFilter, onFilterClick };
};
