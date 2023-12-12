import { IFilterItem } from "@/src/components/commons/filters/order/OrderFilter.types";
import moment from "moment";
import { useState } from "react";

type DatePiece = Date | null;

export type DateValue = DatePiece | [DatePiece, DatePiece];

export const useOrderDate = (resetFilter: () => void) => {
  const [dateFilter, setDateFilter] = useState<IFilterItem>();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onResetFilterWithDate = () => {
    setDateFilter(undefined);
    setStartDate("");
    setEndDate("");
    resetFilter();
  };

  const onDateFilter = (filterItem: IFilterItem) => {
    setDateFilter(filterItem);
  };

  const onStartDate = (selectedDate: DateValue) => {
    setStartDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
  };

  const onEndDate = (selectedDate: DateValue) => {
    setEndDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
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

export const useCalendar = (initalDate?: Date) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(
    initalDate ? moment(initalDate.toString()).format("YY. MM. DD") : "",
  );

  const toggle = () => {
    setShow(!show);
  };

  const onDate = (date: DateValue) => {
    setDate(moment(date?.toString()).format("YY. MM. DD"));
    setShow(false);
  };

  return { show, date, toggle, onDate } as const;
};
