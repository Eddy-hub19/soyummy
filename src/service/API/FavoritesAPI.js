import { axiosInstance } from 'service/API/axios';

export const fetchFavorites = () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  return axiosInstance.get(`/favorite/`).then(({ data }) => {
    return data;
  });
};

export const deleteFavorite = id => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  return axiosInstance.delete(`/favorite/del/${id}`).then(({ data }) => {
    return data;
  });
};

export const addFavorite = id => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  console.log(`/favorite/add/${id}`);
  return axiosInstance.put(`/favorite/add/${id}`, {}).then(({ data }) => {
    return data;
  });
};
