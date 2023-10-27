type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface ICalenderProps {
  isOpen: boolean;
}

export interface IOrderDateInputProps {
  date: string;
  setDate: (date: Value) => void;
}
