import { useEffect, useState } from "react";
import { Manufacturing, OrderStage } from "../apis/order/Order.types";
import moment from "moment";
import { DateValue } from "./useDate";

export const useCustomerOrderFilter = () => {
  const [stageFilters, setStageFilters] = useState<OrderStage[]>([]);
  const [manuFilters, setManuFilters] = useState<Manufacturing[]>([]);

  const onStageFilter = (stage: OrderStage) => {
    setStageFilters((prev) => {
      if (prev.includes(stage)) {
        return prev.filter((el) => el !== stage);
      } else {
        return [...prev, stage];
      }
    });
  };

  const onManufacturingFilter = (manufactruing: Manufacturing) => {
    setManuFilters((prev) => {
      if (prev.includes(manufactruing)) {
        return prev.filter((el) => el !== manufactruing);
      } else {
        return [...prev, manufactruing];
      }
    });
  };

  const onResetFilter = () => {
    setStageFilters([]);
    setManuFilters([]);
  };

  return {
    stageFilters,
    manuFilters,
    onStageFilter,
    onManufacturingFilter,
    onResetFilter,
  } as const;
};

export const useFactoryOrderFilter = (refetch: () => void) => {
  const [orderType, setOrderType] = useState<boolean | null>(null);
  const [dateType, setDateType] = useState<string | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onOrderType = (type: boolean) => {
    if (type === orderType) {
      setOrderType(null);
    } else {
      setOrderType(type);
    }
  };

  const checkRefetch = (type: string | null, start: string, end: string) => {
    if (type && start !== "" && end !== "") {
      refetch();
    }
  };

  const onDateType = (type: string) => {
    if (type === dateType) {
      setDateType(null);
    } else {
      setDateType(type);
      checkRefetch(type, startDate, endDate);
    }
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

  const onResetFilter = () => {
    setOrderType(null);
    setDateType("");
    setStartDate("");
    setEndDate("");
  };

  return {
    orderType,
    dateType,
    startDate,
    endDate,
    onOrderType,
    onDateType,
    onStartDate,
    onEndDate,
    onResetFilter,
  } as const;
};

export const useFactoryNewOrderFilter = () => {
  const [quotationType, setQuotationType] = useState<boolean | null>(null);
  const [customerType, setCustomerType] = useState<boolean | null>(null);
  const [orderType, setOrderType] = useState<boolean | null>(null);

  const onQuotationType = (type: boolean) => {
    if (type === quotationType) {
      setQuotationType(null);
    } else {
      setQuotationType(type);
    }
  };

  const onCustomerType = (type: boolean) => {
    if (type === customerType) {
      setCustomerType(null);
    } else {
      setCustomerType(type);
    }
  };

  const onOrderType = (type: boolean) => {
    if (type === orderType) {
      setOrderType(null);
    } else {
      setOrderType(type);
    }
  };

  const onResetFilter = () => {
    setQuotationType(null);
    setCustomerType(null);
    setOrderType(null);
  };

  return {
    quotationType,
    customerType,
    orderType,
    onQuotationType,
    onCustomerType,
    onOrderType,
    onResetFilter,
  } as const;
};
