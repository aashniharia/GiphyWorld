import React, { useEffect, useState, useContext } from "react";
import GiphyList from "../../components/gifList/index";
import Pagination from "../../components/Pagination/index";
import StyledButton from "../../components/common/styledButton";
import { CategoryContext } from "../../contexts/CategoryContext";
import CustomFilter from "../../components/customFilter/index";
import Loader from "../../components/common/loader";
import { CATS, DOGS, MAX_OFFSET, ITEMS_PER_PAGE } from "../../constants";
import { useTranslation } from "react-i18next";
import ratingOptions from "../../helpers/ratingOptions";
import {
  GiphyContainer,
  CategoryButtons,
  CategoryContentDisplayContainer,
  CategoryContentTitle,
} from "./GiphyStyles";
import useGiphyData from "../../hooks/useGiphyData";
import { useNavigate, useLocation } from "react-router-dom";

const Giphy = () => {
  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  /*   Get the current page number from the URL or default it to 1 */
  const getPageNumberFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(searchParams.get("page"));

    return isNaN(pageNumber) ? 1 : pageNumber;
  };

  const [currentPage, setCurrentPage] = useState(getPageNumberFromURL() || 1);
  const [searchItem, setSearchItem] = useState(currentCategory);
  const [ratingFilter, setRatingFilter] = useState("");

  const itemsPerPage = ITEMS_PER_PAGE;
  const maxPage = Math.ceil(MAX_OFFSET / ITEMS_PER_PAGE);

  const { apiData, totalPages, isLoading } = useGiphyData(
    searchItem,
    currentPage,
    ratingFilter,
    itemsPerPage
  );

  useEffect(() => {
    if (currentPage > maxPage) {
      handlePageChange(maxPage);
      navigate(`/gifs?page=${maxPage}`);
      alert(t("giphy.apiAlert"));
    }
  }, [currentPage, maxPage]);

  const handlePageChange = (page) => setCurrentPage(page);

  const onRatingFilterChange = (value) => setRatingFilter(value);

  const onCategoryChange = (newCategory) => {
    setSearchItem(newCategory);
    setCurrentCategory(newCategory);
    setRatingFilter("");
    setCurrentPage(1);
    navigate(`/gifs?page=1`);
  };

  const renderCategoryButton = (category, label) => (
    <StyledButton
      buttonText={label}
      active={currentCategory === category}
      handleClick={() => onCategoryChange(category)}
    />
  );

  return (
    <GiphyContainer>
      <CategoryButtons>
        {renderCategoryButton(CATS, t("giphy.catTitle"))}
        {renderCategoryButton(DOGS, t("giphy.dogTitle"))}
        <CustomFilter
          value={ratingFilter}
          onChange={onRatingFilterChange}
          options={ratingOptions}
          filterLabel={t("giphy.filterTitle")}
        />
      </CategoryButtons>
      <CategoryContentDisplayContainer>
        <CategoryContentTitle>
          {searchItem === CATS ? t("giphy.catTitle") : t("giphy.dogTitle")}
        </CategoryContentTitle>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              onPageChange={(page) => handlePageChange(page)}
              maxPage={maxPage}
            />
            <GiphyList gifs={apiData} />
          </>
        )}
      </CategoryContentDisplayContainer>
    </GiphyContainer>
  );
};

export default Giphy;
