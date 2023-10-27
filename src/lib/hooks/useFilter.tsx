import { useState } from "react";

export const useOrderFilter = (refetch: () => void) => {
  const [filterMap, setFilterMap] = useState(new Map<string, string[]>());

  const onResetFilter = () => {
    filterMap.forEach((_, key) => filterMap.set(key, []));
    setFilterMap(filterMap);
    refetch();
  };

  const onFilterClick = (key: string, value: string) => {
    const filteredList = filterMap.get(key) ?? [];
    const updatedList = filteredList.includes(value)
      ? filteredList.filter((f) => f !== value)
      : [...filteredList, value];
    const updatedMap = filterMap.set(key, updatedList);
    setFilterMap(new Map(updatedMap));
    refetch();
  };

  return { filterMap, onResetFilter, onFilterClick };
};

export const useOrderSelectFilter = (refetch: () => void) => {
  const [filterMap, setFilterMap] = useState(new Map<string, string[]>());

  const onResetFilter = () => {
    filterMap.forEach((_, key) => filterMap.set(key, []));
    setFilterMap(filterMap);
    refetch();
  };

  const onFilterClick = (key: string, value: string) => {
    const filteredList = filterMap.get(key) ?? [];
    const updatedList =
      filteredList.length === 0 || !filteredList.includes(value) ? [value] : [];
    const updatedMap = filterMap.set(key, updatedList);
    setFilterMap(new Map(updatedMap));
    refetch();
  };

  return { filterMap, onResetFilter, onFilterClick };
};
