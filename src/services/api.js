import axios from 'axios';

const API_KEY = 'f11364ec3e12aedefbdecd97f1555858'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchNewReleases = async () => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchTopPicks = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=recommendations`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};