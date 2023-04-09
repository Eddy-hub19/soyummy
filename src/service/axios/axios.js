import axios from 'axios';

const BASE_URL_BACKEND = 'https://determined-ruby-nematode.cyclic.app';
// const AUTH_TOKEN =
  // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA3YjhlMzcxNDE4ZjdjNmJjMzkxZiIsImlhdCI6MTY4MTA2Mjc3MCwiZXhwIjoxNjgxMzE0NzcwfQ.y5yLnK4NC3JoDq4xnsl8eMRvyrzKKUDAoiiSL5xJOlA';

axios.defaults.baseURL = BASE_URL_BACKEND;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getCategoryListAPI = async () => {
  const response = await axios.get('/recipes/category-list');
  return response.data;
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};

export const getIngradientsFieldsApi = async () => {
  const response = await axios.get('/ingredients/list');
  return response.data;
};
