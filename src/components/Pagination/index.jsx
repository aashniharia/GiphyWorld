import React from "react";
import usePagination from "../../hooks/usePagination";
import { PageButton, PaginationContainer } from "./PaginationStyles";
import { useTranslation } from "react-i18next";

const Pagination = ({ currentPage, totalPages, onPageChange, maxPage }) => {
  const { t } = useTranslation();
  const pageButtons = usePagination(
    currentPage,
    totalPages,
    maxPage,
    onPageChange
  );

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <PageButton
        data-testid="page-button"
        onClick={handlePreviousClick}
        disabled={currentPage <= 1}
      >
        {t("buttons.previous")}
      </PageButton>
      {pageButtons}
      <PageButton
        data-testid="page-button"
        onClick={handleNextClick}
        disabled={currentPage >= totalPages}
      >
        {t("buttons.next")}
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
