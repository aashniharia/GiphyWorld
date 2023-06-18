import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  Heading,
  Message,
  BackButton,
} from "./PageNotFoundStyles";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <Heading>{t("pageNotFound.heading")}</Heading>
      <Message>{t("pageNotFound.message")}</Message>
      <BackButton onClick={handleBackButtonClick}>
        {t("buttons.goBack")}
      </BackButton>
    </NotFoundContainer>
  );
};

export default PageNotFound;
