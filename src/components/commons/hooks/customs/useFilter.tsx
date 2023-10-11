import { useState } from "react";

export const useOrderFilter = () => {
  const [filterMap, setFilterMap] = useState(new Map<number, string[]>());

  const onResetFilter = () => {
    setFilterMap(new Map<number, string[]>());
  };

  const onFilterClick = (index: number, value: string) => {
    const filteredList = filterMap.get(index) ?? [];
    const isSelected = filteredList.includes(value);
    if (isSelected) {
      const selectedIndex = filteredList.indexOf(value);
      filteredList.splice(selectedIndex, 1);
    } else {
      filteredList.push(value);
    }
    const updatedMap = filterMap.set(index, filteredList);
    setFilterMap(new Map(updatedMap));
  };

  return { filterMap, onResetFilter, onFilterClick };
};
