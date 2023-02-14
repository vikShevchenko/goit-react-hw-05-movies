import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/'; //
const KEY = 'f6ffe98b5dc08916d40352e501f3317f';

export const TrendingMovies = async () => {
  const response = await axios.get(`${URL}trending/movie/week?api_key=${KEY}`);
  return response.data;
};

export const SearchMovie = async search => {
  const response = await axios.get(`${URL}search/movie?api_key=${KEY}&query=${search}`);
  return response.data;
};

export const GetMovieById = async id => {
  const response = await axios.get(`${URL}movie/${id}?api_key=${KEY} `);
  return response.data;
};

export const GetCast = async id => {
  const response = await axios.get(`${URL}movie/${id}/credits?api_key=${KEY} `);
  return response.data;
};

export const GetReviews = async id => {
  const response = await axios.get(`${URL}movie/${id}/reviews?api_key=${KEY} `);
  return response.data;
};
