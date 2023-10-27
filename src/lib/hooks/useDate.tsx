import { IFilterItem } from "@/src/components/commons/filters/order/OrderFilter.types";
import { Value } from "@/src/components/commons/inputs/order/OrderDateInput.types";
import moment from "moment";
import { useEffect, useState } from "react";

export const useOrderDate = (resetFilter: () => void, refetch: () => void) => {
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

  const onStartDate = (selectedDate: Value) => {
    setStartDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
  };

  const onEndDate = (selectedDate: Value) => {
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
