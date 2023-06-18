import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
