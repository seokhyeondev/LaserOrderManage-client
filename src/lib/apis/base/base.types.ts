export type IBaseListResponse<T> = {
  contents: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type IBaseListSimpleResponse<T> = {
  contents: T[];
  totalElements: number;
};
