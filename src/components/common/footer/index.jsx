import React from "react";
import { FooterContainer } from "./FooterStyles";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>&copy;{t("footer.footerDescription")} </p>
    </FooterContainer>
  );
};

export default Footer;
