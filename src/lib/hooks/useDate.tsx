import moment from "moment";
import { useState } from "react";

type DatePiece = Date | null;

export type DateValue = DatePiece | [DatePiece, DatePiece];

export const useOrderDate = (refetch: () => void) => {
  const [dateType, setDateType] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const checkRefetch = (
    type: string | undefined,
    start: string,
    end: string,
  ) => {
    if (type !== "" && start !== "" && end !== "") {
      refetch();
    }
  };

  const onDateType = (type: string) => {
    setDateType(type);
    checkRefetch(type, startDate, endDate);
  };

  const onStartDate = (selectedDate: DateValue) => {
    setStartDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
    checkRefetch(
      dateType,
      moment(selectedDate?.toString()).format("YY. MM. DD"),
      endDate,
    );
  };

  const onEndDate = (selectedDate: DateValue) => {
    setEndDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
    checkRefetch(
      dateType,
      startDate,
      moment(selectedDate?.toString()).format("YY. MM. DD"),
    );
  };

  const onResetDate = () => {
    setDateType("");
    setStartDate("");
    setEndDate("");
  };

  return {
    dateType,
    startDate,
    endDate,
    onDateType,
    onStartDate,
    onEndDate,
    onResetDate,
  };
};

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
