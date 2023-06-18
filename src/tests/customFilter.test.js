import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomFilter from "../components/CustomFilter";
import ratingOptions from "../helpers/ratingOptions";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("CustomFilter Component", () => {
  test("renders the filter options and triggers onChange event", () => {
    const onChange = jest.fn();
    const value = "pg-13";

    const { t } = useTranslation();

    render(
      <ThemeProvider theme={theme}>
        <CustomFilter
          value={value}
          onChange={onChange}
          options={ratingOptions}
          filterLabel={t("giphy.filterTitle")}
        />
      </ThemeProvider>
    );

    const filterLabel = screen.getByLabelText(t("giphy.filterTitle"));
    const filterSelect = screen.getByTestId("rating-filter-select");

    expect(filterLabel).toBeInTheDocument();

    expect(filterSelect.value).toBe(value);

    fireEvent.change(filterSelect, { target: { value: "pg" } });

    expect(onChange).toHaveBeenCalledWith("pg");

    expect(filterSelect.value).toBe("pg-13");
  });
});
