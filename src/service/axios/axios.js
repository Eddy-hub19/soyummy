import axios from 'axios';

const BASE_URL_BACKEND = 'https://determined-ruby-nematode.cyclic.app';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ5YjIxMTllZWNlNGVkNDgwNTcyOCIsImlhdCI6MTY4MDc5ODE0NSwiZXhwIjoxNjgwODcwMTQ1fQ.OeW8xobzII1pRe-duqQZAFitoUcElcF5tYcjHxWSzqE';
// axios.defaults.baseURL = process.env.BASE_URL_BACKEND;
axios.defaults.baseURL = BASE_URL_BACKEND;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getRecipeById = async id => {
  const response = await axios.get(`/recipes/${id}`);
  return response.data;
};

export const getCategoryListAPI = async () => {
  const response = await axios.get('/recipes/category-list');
  return response.data;
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};
