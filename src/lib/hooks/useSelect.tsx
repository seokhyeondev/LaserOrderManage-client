import { ChangeEvent, useState } from "react";

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

export const useOptions = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue ?? "");

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return [value, onSelect] as const;
};
