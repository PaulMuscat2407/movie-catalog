import axios from 'axios';

const API_BASE_URL = 'http://localhost:5026/api';

export const fetchMovies = async () => {
  const response = await axios.get(`${API_BASE_URL}/Movies`);
  return response.data;
};
