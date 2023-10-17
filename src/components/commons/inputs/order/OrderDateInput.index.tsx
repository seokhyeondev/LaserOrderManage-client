import Image from "next/image";
import * as S from "./OrderDateInput.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import moment from "moment";
import { IOrderDateInputProps, Value } from "./OrderDateInput.types";

export default function OrderDateInput(props: IOrderDateInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalender = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: Value) => {
    props.setDate(moment(selectedDate?.toString()).format("YY. MM. DD"));
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
        />
        <Image width={18} height={18} src="/images/calender.svg" alt="달력" />
      </S.InputWrapper>
      <S.CalendarWrapper isOpen={isOpen}>
        <Calendar onChange={handleDateChange} locale="ko" />
      </S.CalendarWrapper>
    </S.Wrapper>
  );
}
