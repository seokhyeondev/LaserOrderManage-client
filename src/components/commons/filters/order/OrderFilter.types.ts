export interface IFilterProps {
  isSelect: boolean;
}

export interface IOrderFilterProps {
  filterMap: Map<number, string[]>;
  filterGroups: IFilterGroup[];
  onResetFilter: () => void;
  onFilterClick: (index: number, value: string) => void;
}

interface IFilterItem {
  name: string;
  value: string;
  percentage?: string;
}

export interface IFilterGroup {
  title: string;
  filters: IFilterItem[];
}
