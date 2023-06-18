import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-right: auto;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NavItem = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: block;
    margin-right: 0;
    margin-bottom: 5px;
  }
`;
