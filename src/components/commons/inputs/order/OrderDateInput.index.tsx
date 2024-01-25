import * as S from "./OrderDateInput.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { IOrderDateInputProps } from "./OrderDateInput.types";
import { DateValue } from "@/src/lib/hooks/useDate";
import CalendarIcon from "../../icons/CalendarIcon.index";

export default function OrderDateInput({
  date,
  setDate,
}: IOrderDateInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (selectedDate: DateValue) => {
    setDate(selectedDate);
    setIsOpen(false);
  };

  return (
    <S.Wrapper>
      <S.InputWrapper
        className="flex-row-between-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <S.DateInput
          className="regular14"
          placeholder="연도. 월. 일"
          value={date}
          readOnly
        />
        <CalendarIcon size={16} />
      </S.InputWrapper>
      <S.CalendarWrapper isOpen={isOpen}>
        <Calendar onChange={handleDateChange} locale="ko" />
      </S.CalendarWrapper>
    </S.Wrapper>
  );
}
