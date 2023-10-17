export interface IFilterProps {
  isSelect: boolean;
}

export interface IOrderFilterProps {
  filterMap: Map<string, string[]>;
  filterGroups: IFilterGroup[];
  onResetFilter: () => void;
  onFilterClick: (value: string) => void;
}

export interface IFilterItem {
  name: string;
  value: string;
  percentage?: string;
}

export interface IFilterGroup {
  title: string;
  filters: IFilterItem[];
}
