import React from "react";
import { AboutContainer, Heading, Paragraph } from "./AboutStyles";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <Heading>{t("about.heading")}</Heading>
      <Paragraph>{t("about.aboutParagraph1")}</Paragraph>
      <Paragraph>{t("about.aboutParagraph2")}</Paragraph>
      <Paragraph>{t("about.aboutParagraph3")}</Paragraph>
    </AboutContainer>
  );
};

export default AboutPage;
