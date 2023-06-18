import {
  PageButton,
  PaginationEllipsis,
} from "../components/Pagination/PaginationStyles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const usePagination = (currentPage, totalPages, maxPage, onPageChange) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (page) => {
    if (currentPage !== page) {
      onPageChange(page);
      navigate(`/gifs?page=${page}`);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    const page = parseInt(pageParam, 10);
    if (page && currentPage !== page) {
      onPageChange(page);
    }
  }, [location.search]);

  const renderPageButtons = () => {
    const buttons = [];

    const showFirstEllipsis = currentPage > 3;
    const showLastEllipsis = currentPage < totalPages - 2;

    /* Displaying the first page button */
    if (currentPage > 3) {
      buttons.push(
        <PageButton
          key={1}
          onClick={() => handlePageClick(1)}
          disabled={currentPage <= 1}
        >
          1
        </PageButton>
      );
      if (showFirstEllipsis) {
        buttons.push(
          <PaginationEllipsis key="ellipsis-start">...</PaginationEllipsis>
        );
      }
    }

    /* Displaying the current page button and nearby pages */
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(maxPage, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </PageButton>
      );
    }

    /* Displaying the last page button */
    if (currentPage < totalPages) {
      if (showLastEllipsis) {
        buttons.push(
          <PaginationEllipsis key="ellipsis-end">...</PaginationEllipsis>
        );
      }
      buttons.push(
        <PageButton
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage >= totalPages}
        >
          {totalPages}
        </PageButton>
      );
    }

    return buttons;
  };

  return {
    handlePageClick,
    renderPageButtons,
  };
};

export default usePagination;
