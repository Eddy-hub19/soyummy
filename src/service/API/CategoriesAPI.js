import {axiosInstance} from 'service/API/axios';

export const getCategoryListAPI = async () => {

  const response = await axiosInstance.get('/recipes/category-list');
  return response.data;
};

export const getAllRecipesByCategoryAPI = (category) => {

  return axiosInstance.get(`/recipes/category/${category}`).then(({ data }) => {
    return data;
  });
};

