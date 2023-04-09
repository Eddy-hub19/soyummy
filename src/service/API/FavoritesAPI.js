import { axiosInstance } from 'service/API/axios';

export const fetchFavorites = token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(`token`, token);
  return axiosInstance.get(`/favorite/`, config).then(({ data }) => {
    return data;
  });
};

export const deleteFavorite = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .delete(`/favorite/del/${id}`, config)
    .then(({ data }) => {
      return data;
    });
};

export const addFavorite = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(`/favorite/add/${id}`);
  return axiosInstance
    .put(`/favorite/add/${id}`, {}, config)
    .then(({ data }) => {
      return data;
    });
};
