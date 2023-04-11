import { axiosInstance } from 'service/API/axios';

export const getRecipeById = async id => {
  const response = await axiosInstance.get(`/recipes/${id}`);
  return response.data;
};

export const getIngradientsFieldsApi = async () => {
  const response = await axiosInstance.get('/ingredients/list');
  return response.data;
};

export const getPopularListAPI = async () => {
  const response = await axiosInstance.get('/recipes/popular');
  return response.data;
};

export const getCategoryListAPI = async () => {
  const response = await axiosInstance.get('/recipes/category-list');
  return response.data;
};
