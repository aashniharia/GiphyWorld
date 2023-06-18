import styled from "styled-components";

export const NotFoundContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
