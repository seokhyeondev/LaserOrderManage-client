import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue] as const;
};

export const useInputWithRegex = (
  regex: string | RegExp,
  replaceValue: string,
  initialValue?: string,
) => {
  const [value, setValue] = useState(initialValue ?? "");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.replace(regex, replaceValue));
  };

  return [value, onChange, setValue] as const;
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

  return { value, setValue, onChange } as const;
};

export const useInputWithError = (
  defErrorMessage: string,
  correct: (value: string) => boolean,
  passCondition: (value: string) => boolean,
  regex?: string | RegExp,
) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(defErrorMessage);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = regex
      ? event.target.value.replace(regex, "")
      : event.target.value;
    setValue(input);
    if (correct(input)) {
      setError(false);
    }
  };

  const passError = (): boolean => {
    if (!passCondition(value)) {
      setErrorMessage(defErrorMessage);
      setError(true);
      return false;
    }
    return true;
  };

  const showError = (msg?: string) => {
    setErrorMessage(msg ?? defErrorMessage);
    setError(true);
  };

  const hideError = () => {
    setError(false);
  };

  const isCorrect = correct(value);
  const errorWithEmpty = value !== "" && !correct(value);

  return {
    value,
    isCorrect,
    error,
    errorMessage,
    errorWithEmpty,
    setValue,
    onChange,
    showError,
    hideError,
    passError,
  } as const;
};
