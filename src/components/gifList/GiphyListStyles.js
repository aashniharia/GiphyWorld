import styled from "styled-components";

export const GiphyListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

export const GiphyListItem = styled.div`
  width: 25%;
  padding: 10px;
  box-shadow: 2px 2px 4px 0 #ccc;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.peach};
  margin: 10px;
  align-self: flex-start !important;

  @media (max-width: 768px) {
    width: 33.33%;
  }

  @media (max-width: 480px) {
    margin: 0px;
    width: 50%;
    padding-top: 10px;
  }
`;

export const GiphyListImage = styled.img`
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;
