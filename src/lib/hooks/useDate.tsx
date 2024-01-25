import { IFilterItem } from "@/src/components/commons/filters/OrderFilter.types";
import moment from "moment";
import { useState } from "react";

type DatePiece = Date | null;

export type DateValue = DatePiece | [DatePiece, DatePiece];

export const useOrderDate = (resetFilter: () => void, refetch: () => void) => {
  const [dateFilter, setDateFilter] = useState<IFilterItem>();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const checkRefetch = (d: IFilterItem | undefined, s: string, e: string) => {
    if (d !== undefined && s !== "" && e !== "") {
      refetch();
    }
  };

  const onResetFilterWithDate = () => {
    setDateFilter(undefined);
    setStartDate("");
    setEndDate("");
    resetFilter();
  };

  const onDateFilter = (filterItem: IFilterItem) => {
    setDateFilter(filterItem);
    checkRefetch(filterItem, startDate, endDate);
  };

  const onStartDate = (selectedDate: DateValue) => {
    setStartDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
    checkRefetch(
      dateFilter,
      moment(selectedDate?.toString()).format("YY. MM. DD"),
      endDate,
    );
  };

  const onEndDate = (selectedDate: DateValue) => {
    setEndDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
    checkRefetch(
      dateFilter,
      startDate,
      moment(selectedDate?.toString()).format("YY. MM. DD"),
    );
  };

  return {
    dateFilter,
    startDate,
    endDate,
    onResetFilterWithDate,
    onDateFilter,
    onStartDate,
    onEndDate,
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
