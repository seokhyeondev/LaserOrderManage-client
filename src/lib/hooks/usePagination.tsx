import { useState, MouseEvent, useEffect } from "react";

interface IUsePaginationArgs {
  totalPage: number | undefined;
  refetch: () => void;
}

export const usePagination = (args: IUsePaginationArgs) => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = args.totalPage ?? startPage;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const clickedPage = Number(event.currentTarget.id);
    if (clickedPage === activedPage) {
      return;
    }
    setActivedPage(clickedPage);
  };

  useEffect(() => {
    args.refetch();
  }, [activedPage]);

  return {
    startPage,
    activedPage,
    lastPage,
    onClickPage,
  };
};
