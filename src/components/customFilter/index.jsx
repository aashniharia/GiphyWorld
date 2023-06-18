import React from "react";
import {
  FilterContainer,
  FilterLabel,
  FilterSelect,
} from "./CustomFilterStyles";

const CustomFilter = ({ value, onChange, options, filterLabel }) => (
  <FilterContainer>
    <FilterLabel htmlFor="rating">{filterLabel}</FilterLabel>
    <FilterSelect
      id="rating"
      data-testid="rating-filter-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </FilterSelect>
  </FilterContainer>
);

export default CustomFilter;
