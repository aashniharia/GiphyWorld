import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
  align-items: center;
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.colors.yellow};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #f1b75b;
    box-shadow: 0 0 4px rgba(241, 183, 91, 0.6);
  }

  @media only screen and (max-width: 600px) {
    width: 75%;
  }
`;
