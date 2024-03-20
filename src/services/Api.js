const apiKey = "0d26e16777mshae69cf52fe900aep117b1djsnf1f6c9d26cc4";
const apiHost = "imdb8.p.rapidapi.com";

export const makeApiRequest = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    console.log("Response:", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("API request failed:", error);
    return null;
  }
};

export const fetchMoviesByQuery = async (query, limit = 18) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${apiHost}/title/v2/find?title=${encodedQuery}&limit=${limit}&sortArg=moviemeter%2Casc`;
  return await makeApiRequest(url);
};

export const fetchMovieDetails = async (id) => {
  const url = `https://${apiHost}/title/v2/get-details?tconst=${id}`;
  return await makeApiRequest(url);
};
