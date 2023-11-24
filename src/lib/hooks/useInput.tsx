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

export const useInputWithMaxLength = (maxLength: number) => {
  const [value, setValue] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setValue(input);
    }
  };

  return {value, setValue, onChange} as const;
};

export const useInputWithError = (
  defErrorMessage: string,
  correct: (value: string) => boolean,
  passCondition: (value: string) => boolean,
  regex?: string | RegExp,
  ) => {
  const [value, setValue] = useState("");
  const [error , setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defErrorMessage);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = regex ? event.target.value.replace(regex, "") : event.target.value;
    setValue(input);
    if(correct(input)) {
      setError(false);
    }
  };

  const passError = (): boolean => {
    if(!passCondition(value)) {
      setErrorMessage(defErrorMessage);
      setError(true);
      return false;
    }
    return true;
  };

  const isCorrect = correct(value);
  const errorWithEmpty = value !== "" && !correct(value);

  return {value, setValue, onChange, isCorrect, error, errorWithEmpty, setError, errorMessage, setErrorMessage, passError} as const;
};