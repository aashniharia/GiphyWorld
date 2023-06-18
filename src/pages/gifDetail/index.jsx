import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GifDetailsContainer,
  GifProperties,
  GifEnlargedImageContainer,
  GifImage,
  GifDetail,
  GifTitle,
  GifLink,
  BackButton,
  GifNotFoundContainer,
} from "./GifDetailsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const GifDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const gif = location.state?.gif;
  const { t } = useTranslation();

  const handleOnBackClick = () => {
    navigate(-1);
  };

  if (!gif) {
    return (
      <>
        <BackButton onClick={handleOnBackClick}>{t("buttons.back")}</BackButton>
        <GifNotFoundContainer>
          {t("GifDetail.noGifSelected")}
        </GifNotFoundContainer>
      </>
    );
  }

  return (
    <GifDetailsContainer>
      <GifProperties>
        <BackButton onClick={handleOnBackClick}>{t("buttons.back")}</BackButton>
        <GifTitle>{gif.title}</GifTitle>
        {gif.user ? (
          <>
            <GifDetail>
              <b>{t("GifDetail.username")} </b> {gif.user.username}
            </GifDetail>
            {gif.user.instagram_url && (
              <GifDetail>
                <b>{t("GifDetail.followOn")}</b>
                <GifLink href={gif.user.instagram_url}>
                  <FontAwesomeIcon icon={faInstagram} />
                </GifLink>
              </GifDetail>
            )}
          </>
        ) : (
          ""
        )}
        {gif.rating && (
          <GifDetail className="GifDetails__rating">
            <b>{t("GifDetail.rating")}</b> {gif.rating}
          </GifDetail>
        )}
        {gif.type && (
          <GifDetail className="GifDetails__type">
            {" "}
            <b>{t("GifDetail.type")}</b>
            {gif.type}
          </GifDetail>
        )}
        {gif.source_post_url && (
          <GifDetail className="GifDetails__source">
            <b>{t("GifDetail.source")}</b>
            <GifLink href={gif.source_post_url}>{gif.source_post_url}</GifLink>
          </GifDetail>
        )}
      </GifProperties>
      <GifEnlargedImageContainer>
        <GifImage src={gif.images.fixed_height.url} alt={gif.title} />
      </GifEnlargedImageContainer>
    </GifDetailsContainer>
  );
};

export default GifDetails;
