import axios from 'axios';
// import { axiosInstance } from "service/API/axios"

axios.defaults.baseURL = 'https://determined-ruby-nematode.cyclic.app';
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA3YjhlMzcxNDE4ZjdjNmJjMzkxZiIsImlhdCI6MTY4MTA2Mjc3MCwiZXhwIjoxNjgxMzE0NzcwfQ.y5yLnK4NC3JoDq4xnsl8eMRvyrzKKUDAoiiSL5xJOlA';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
axios.defaults.headers.common['Authorization'] = token;

export const getRecipeById = async id => {
  console.log(id);
  const response = await axios.get(`/recipes/${id}`);
  return response.data;
};

export const addToFavorite = async id => {
  console.log(id);
  const response = await axios.put(`/favorite/add/${id}`);
  console.log(response.message);
  return response.data;
};
