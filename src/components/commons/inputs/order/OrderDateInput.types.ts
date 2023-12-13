import { DateValue } from "@/src/lib/hooks/useDate";

export interface ICalenderProps {
  isOpen: boolean;
}

export interface IOrderDateInputProps {
  date: string;
  setDate: (date: DateValue) => void;
}
