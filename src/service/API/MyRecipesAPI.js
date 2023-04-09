import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;

export const fetchMyRecipes = (token, userID) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`/own-recipes/${userID}`, config).then(({ data }) => {
    return data;
  });
};

export const deleteMyRecipe = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.delete(`/own-recipes/remove/${id}`, config).then(({ data }) => {
    return data;
  });
};

export const addMyRecipes = (token, body) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(`/own-recipes/add`, body, config).then(({ data }) => {
    return data;
  });
};
