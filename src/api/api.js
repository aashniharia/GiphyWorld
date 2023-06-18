// This file handles all API requests
import axios from "axios";

export const API_KEY = "ua6tix2fpDOh3z5brzt2UkBg2Gkncnq6";
export const BASE_URL = "https://api.giphy.com/v1/gifs";

export const fetchGiphyData = async (category, page, rating) => {
  const itemsPerPage = 25;
  const offset = (page - 1) * itemsPerPage;

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: category,
        limit: itemsPerPage,
        offset: offset,
        rating: rating,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
