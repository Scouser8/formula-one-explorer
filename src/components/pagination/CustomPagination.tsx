import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  page: number;
  setPage: (newPage: number) => void;
  totalCount: number;
  pageSize?: number;
  maxPageButtonsToShow?: number;
};

export const CustomPagination = (props: Props) => {
  const {
    page,
    setPage,
    totalCount,
    pageSize = 15,
    maxPageButtonsToShow = 3,
  } = props;

  const pagesCount = Math.ceil(totalCount / pageSize) - 1;
  const getPagesToShow = () => {
    if (pagesCount <= maxPageButtonsToShow) {
      return Array.from({ length: pagesCount }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    const startPage = Math.max(0, page - 1);
    const endPage = Math.min(pagesCount, page + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pagesToShow = getPagesToShow();

  return (
    <Pagination>
      <PaginationContent>
        {page > 0 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => setPage(page - 1)} />
          </PaginationItem>
        )}
        {pagesToShow[0] > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pagesToShow.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              isActive={pageNumber === page}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {pagesToShow[pagesToShow.length - 1] < pagesCount && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page < pagesCount && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setPage(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
