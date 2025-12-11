const API_KEY = "a1c14fe64c511d8f82ad7e928145d635";

const TBDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWMxNGZlNjRjNTExZDhmODJhZDdlOTI4MTQ1ZDYzNSIsIm5iZiI6MTc2NDUxMzU5My45NzcsInN1YiI6IjY5MmM1NzM5MTE1ODU0ZjJlYTI0ODA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFkc9QzHufawjUIAWTPorF_yrJRca4obUGmCXS8arS4";
const BASE_URL = "https://api.themoviedb.org/3";


const options = {
  headers: {
    Authorization: `Bearer ${TBDB_TOKEN}`,
    "Content-Type": "application/json"
  }
}


export const getPopularMovies = async () => {

  const response = await fetch(`${BASE_URL}/movie/popular`, options);

  if(!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await response.json();
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, options);

  if (!response.ok) {
    throw new Error("Failed to search");
  }

  const data = await response.json();
  return data.results
}