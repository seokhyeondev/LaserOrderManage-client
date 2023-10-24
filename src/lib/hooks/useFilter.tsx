import { useState } from "react";

export const useOrderFilter = (refetch: () => void) => {
  const [filterMap, setFilterMap] = useState(new Map<string, string[]>());

  const onResetFilter = () => {
    const updatedMap = filterMap;
    updatedMap.forEach((_, key) => filterMap.set(key, []));
    setFilterMap(updatedMap);
    refetch();
  };

  const onFilterClick = (key: string, value: string) => {
    const filteredList = filterMap.get(key) ?? [];
    const isSelected = filteredList.includes(value);
    if (isSelected) {
      const selectedIndex = filteredList.indexOf(value);
      filteredList.splice(selectedIndex, 1);
    } else {
      filteredList.push(value);
    }
    const updatedMap = filterMap.set(key, filteredList);
    setFilterMap(new Map(updatedMap));
    refetch();
  };

  return { filterMap, onResetFilter, onFilterClick };
};
