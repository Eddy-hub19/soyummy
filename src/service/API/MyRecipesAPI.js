import { axiosInstance } from 'service/API/axios';

export const fetchMyRecipes = (token, userID) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .get(`/own-recipes/${userID}`, config)
    .then(({ data }) => {
      return data;
    });
};

export const deleteMyRecipe = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .delete(`/own-recipes/remove/${id}`, config)
    .then(({ data }) => {
      return data;
    });
};

export const addMyRecipes = (token, body) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .post(`/own-recipes/add`, body, config)
    .then(({ data }) => {
      return data;
    });
};
