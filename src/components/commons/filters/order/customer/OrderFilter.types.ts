export interface ICustomerOrderFilterProps {
  onResetFilter: () => void;
  onFilterClick: (index: number, value: string) => void;
  filterMap: Map<number, Array<string>>;
}
