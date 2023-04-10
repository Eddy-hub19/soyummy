import { axiosInstance } from 'service/API/axios';

export const addShoppingListAPI = (token, body) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance.post('/shopping-list', body, config).then(({ data }) => {
    return data;
  });
};

export const getShoppingListAPI = token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance.get('/shopping-list', config).then(({ data }) => {
    return data;
  });
};

export const removeShoppingListAPI = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .delete(`/shopping-list/${id}`, config)
    .then(({ data }) => {
      return data;
    });
};
