import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("Pagination Component", () => {
  test("renders the pagination buttons", () => {
    const currentPage = 2;
    const totalPages = 5;
    const onPageChange = jest.fn();
    const maxPage = 10;

    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            maxPage={maxPage}
          />
        </Router>
      </ThemeProvider>
    );

    const { t } = useTranslation();

    const previousButton = screen.getByRole("button", {
      name: t("buttons.previous"),
    });
    const nextButton = screen.getByRole("button", {
      name: t("buttons.next"),
    });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);

    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);

    const pageButtons = screen.getAllByTestId("page-button");

    fireEvent.click(pageButtons[0]);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
