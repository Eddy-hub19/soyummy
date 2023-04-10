import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://determined-ruby-nematode.cyclic.app',
});
