import styled from "styled-components";

export const GifDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GifNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GifProperties = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.peach};
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

export const GifEnlargedImageContainer = styled.div`
  flex: 2.8;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
    padding: 10px;
  }
`;

export const GifImage = styled.img`
  width: 100%;
  max-height: 90%;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 60%;
  }
`;

export const GifDetail = styled.p`
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black};
`;

export const GifTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.helvitica};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.black};
`;

export const GifLink = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.black};
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
  }
`;
