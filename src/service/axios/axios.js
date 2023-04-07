import axios from 'axios';

const BASE_URL_BACKEND = 'https://determined-ruby-nematode.cyclic.app';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFkODk1YjFlNmFkYzgxYTkzNmYzYiIsImlhdCI6MTY4MDg4NTAyOSwiZXhwIjoxNjgyNjg1MDI5fQ.8IhA_kR_T9Vbctcmrgk_FHQvkob9LzUhhNoSwiLI1cA';
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

export const getIngradientsFieldsApi = async () => {
  const response = await axios.get('/ingredients/list');
  return response.data;
};
