import moment from "moment";
import { useState } from "react";

type DatePiece = Date | null;

export type DateValue = DatePiece | [DatePiece, DatePiece];

export const useCalendar = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");

  const toggle = () => {
    setShow(!show);
  };

  const setDateValue = (date: Date) => {
    setDate(moment(date.toString()).format("YY. MM. DD"));
  };

  const onDate = (date: DateValue) => {
    setDate(moment(date?.toString()).format("YY. MM. DD"));
    setShow(false);
  };

  return { show, date, toggle, onDate, setDateValue } as const;
};
