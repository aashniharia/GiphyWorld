import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderContainer, Logo, Nav, NavItem } from "./HeaderStyles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Logo>{t("header.logoTitle")}</Logo>
      <Nav>
        <NavItem href="/gifs">{t("header.home")}</NavItem>
        <NavItem href="/about">{t("header.about")}</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
