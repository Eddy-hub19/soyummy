import { axiosInstance } from "service/API/axios";

export const fetchMyRecipes = (userID) => {
  return axiosInstance.get(`/own-recipes/${userID}`).then(({ data }) => {
    return data;
  });
};

export const deleteMyRecipe = (id) => {
  return axiosInstance.delete(`/own-recipes/remove/${id}`).then(({ data }) => {
    return data;
  });
};

export const addMyRecipes = (body) => {
  return axiosInstance.post(`/own-recipes/add`, body).then(({ data }) => {
    return data;
  });
};
