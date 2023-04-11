import { axiosInstance } from 'service/API/axios';

export const fetchMyRecipes = userID => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  return axiosInstance.get(`/own-recipes/${userID}`).then(({ data }) => {
    return data;
  });
};

export const deleteMyRecipe = id => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  return axiosInstance.delete(`/own-recipes/remove/${id}`).then(({ data }) => {
    return data;
  });
};

export const addMyRecipes = body => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  return axiosInstance.post(`/own-recipes/add`, body).then(({ data }) => {
    return data;
  });
};
