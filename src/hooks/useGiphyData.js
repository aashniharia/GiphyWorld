import { useEffect, useState } from "react";
import { fetchGiphyData } from "../api/api";

const useGiphyData = (searchItem, currentPage, ratingFilter, itemsPerPage) => {
  const [apiData, setApiData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchGiphyData(searchItem, currentPage, ratingFilter)
      .then((data) => {
        setApiData(data.data);
        const totalCount = data.pagination.total_count;
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, [searchItem, currentPage, ratingFilter]);

  return { apiData, totalPages, isLoading };
};
export default useGiphyData;
