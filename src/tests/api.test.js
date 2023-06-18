import axios from "axios";
import { fetchGiphyData, API_KEY, BASE_URL } from "../api/api";

jest.mock("axios");

describe("fetchGiphyData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches Giphy data successfully", async () => {
    const category = "cats";
    const page = 1;
    const rating = "g";

    const responseData = {
      data: [
        { id: "gif1", title: "GIF 1" },
        { id: "gif2", title: "GIF 2" },
      ],
    };

    axios.get.mockResolvedValueOnce(responseData);

    const result = await fetchGiphyData(category, page, rating);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: category,
        limit: 25,
        offset: 0,
        rating: rating,
      },
    });
    expect(result).toEqual(responseData.data);
  });

  it("throws an error when fetching Giphy data fails", async () => {
    const category = "cats";
    const page = 1;
    const rating = "g";

    const errorMessage = "Failed to fetch Giphy data.";
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchGiphyData(category, page, rating)).rejects.toThrow(
      errorMessage
    );
  });
});
