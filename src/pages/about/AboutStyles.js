import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
