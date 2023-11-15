import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, onChange] as const;
};

export const useInputWithRegex = (
  regex: string | RegExp,
  replaceValue: string,
) => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.replace(regex, replaceValue));
  };

  return [value, onChange] as const;
};
