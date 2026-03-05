import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 35000,
});

/**
 * Fetches movie data from the backend by IMDb ID.
 * @param {string} imdbId - e.g. "tt0133093"
 */
export async function fetchMovie(imdbId: string) {
  console.log(`Fetching movie data for IMDb ID:`, imdbId);
  const response = await api.get(`/api/movie/${imdbId}`);
  return response.data.data;
}

/**
 * Fetches AI sentiment analysis for a given movie object.
 * @param {Object} movieData - normalized movie object from fetchMovie
 */
export async function fetchSentiment(movieData: any) {
  const response = await api.post("/api/movie/sentiment", { movieData });
  return response.data.data;
}

/**
 * Checks backend health.
 */
export async function checkHealth() {
  const response = await api.get("/api/health");
  return response.data;
}
