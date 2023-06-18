import styled from "styled-components";

export const GiphyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const CategoryContentDisplayContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin: auto;
  padding: 10px;
  text-align: center;
`;

export const CategoryContentTitle = styled.h2`
  color: ${(props) => props.theme.colors.primaryColor};
`;
