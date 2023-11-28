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

  useEffect(() => {
    if (args.totalPage && args.totalPage < activedPage) {
      setActivedPage(1);
    }
  }, [args.totalPage, activedPage]);

  return {
    startPage,
    activedPage,
    lastPage,
    onClickPage,
  };
};

export const useSimplePagination = (args: IUsePaginationArgs) => {
  const [activedPage, setActivedPage] = useState(1);
  const hasBefore = activedPage > 1;
  const hasNext = args.totalPage ? activedPage < args.totalPage : false;
  const onClickBefore = () => {
    if (hasBefore) {
      setActivedPage(activedPage - 1);
    }
  };
  const onClickNext = () => {
    if (hasNext) {
      setActivedPage(activedPage + 1);
    }
  };
  return {
    activedPage,
    hasBefore,
    hasNext,
    onClickBefore,
    onClickNext,
  } as const;
};
