import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;

export const getCategoryListAPI = async (token) => {
    const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('/recipes/category-list', config);
  return response.data;
};

export const getAllRecipesByCategoryAPI = (category, token) => {
     const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`/recipes/category/${category}`, config).then(({ data }) => {
    return data;
  });
};