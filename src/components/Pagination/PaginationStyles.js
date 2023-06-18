import styled from "styled-components";

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) =>
    active ? (props) => props.theme.colors.blue : "transparent"};
  color: ${({ active }) =>
    active
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.black};
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${({ disabled }) => disabled && "opacity: 0.5; pointer-events: none;"}

  &:hover {
    background-color: ${({ active }) =>
      active
        ? (props) => props.theme.colors.blue
        : (props) => props.theme.colors.loaderRed};
  }

  @media (max-width: 480px) {
    padding: 3px 8px;
    font-size: 12px;
  }
`;

export const PaginationEllipsis = styled.span`
  margin: 0 5px;
  font-weight: bold;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
