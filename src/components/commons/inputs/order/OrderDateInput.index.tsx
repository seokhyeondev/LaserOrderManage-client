import Image from "next/image";
import * as S from "./OrderDateInput.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { IOrderDateInputProps } from "./OrderDateInput.types";
import { DateValue } from "@/src/lib/hooks/useDate";

export default function OrderDateInput(props: IOrderDateInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalender = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: DateValue) => {
    props.setDate(selectedDate);
    setIsOpen(false);
  };

  return (
    <S.Wrapper>
      <S.InputWrapper
        className="flex-row-between-center"
        onClick={toggleCalender}
      >
        <S.DateInput
          className="regular14"
          placeholder="연도. 월. 일"
          value={props.date}
          readOnly
        />
        <Image width={18} height={18} src="/images/calender.svg" alt="달력" />
      </S.InputWrapper>
      <S.CalendarWrapper isOpen={isOpen}>
        <Calendar onChange={handleDateChange} locale="ko" />
      </S.CalendarWrapper>
    </S.Wrapper>
  );
}
