import { useState, MouseEvent } from "react";

interface IUsePaginationArgs {
  count: number | undefined;
}

export const usePagination = (args: IUsePaginationArgs) => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = args.count != null ? Math.ceil(args.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
  };

  return {
    startPage,
    activedPage,
    lastPage,
    onClickPage,
  };
};
