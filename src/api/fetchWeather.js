import axios from 'axios';

const URL = 'https://api.collectapi.com/weather/getWeather';
const API_KEY = 'apikey YOUR_API_KEY';
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      'data.city': query,
    },
    headers: {
      'content-type': 'application/json',
      authorization: API_KEY,
    },
  });
  return data;
};
