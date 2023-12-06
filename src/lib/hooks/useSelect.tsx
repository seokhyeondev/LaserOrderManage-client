import { useState } from "react";

export const useSelect = <T,>() => {
  const [selected, setSelected] = useState<T[]>([]);

  const onSelect = (key: T) => {
    setSelected((prevSelected) => {
      const index = prevSelected?.indexOf(key);
      if (index !== -1) {
        return prevSelected?.filter((s) => s !== key);
      } else {
        return [...prevSelected, key];
      }
    });
  };
  return { selected, setSelected, onSelect } as const;
};
