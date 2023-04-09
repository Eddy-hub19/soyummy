import axios from 'axios';

const BASE_URL_BACKEND = 'https://determined-ruby-nematode.cyclic.app';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzExYzAxMzA2Njc3YmU0MDJkNGEyMCIsImlhdCI6MTY4MTA1MjQyNSwiZXhwIjoxNjgxMzA0NDI1fQ.FRks_DzwRlkYP_o3cLgprLw8gCAuMsasxS1KZR9PnRE';

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

export const getPopularListAPI = async () => {
  const response = await axios.get('/recipes/popular');
  return response.data;
};
