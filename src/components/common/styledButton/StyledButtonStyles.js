import styled from "styled-components";

export const CustomButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "blue" : "white")};
  color: ${(props) =>
    props.active
      ? (props) => props.theme.colors.white
      : (props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  cursor: pointer;
  margin: 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
