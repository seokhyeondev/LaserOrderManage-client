import { useState } from "react";

export const useSelect = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const onSelect = (key: string) => {
    setSelected((prevSelected) => {
      const index = prevSelected?.indexOf(key);
      if (index !== -1) {
        return prevSelected?.filter((s) => s !== key);
      } else {
        return [...prevSelected, key];
      }
    });
  };
  return [selected, onSelect] as const;
};
