import { axiosInstance } from 'service/API/axios';

export const addShoppingListAPI = body => {
  return axiosInstance.post('/shopping-list', body).then(({ data }) => {
    return data;
  });
};

export const getShoppingListAPI = () => {
  return axiosInstance.get('/shopping-list').then(({ data }) => {
    return data;
  });
};

export const removeShoppingListAPI = id => {
  return axiosInstance.delete(`/shopping-list/${id}`).then(({ data }) => {
    return data;
  });
};
