import axios from 'axios';


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
