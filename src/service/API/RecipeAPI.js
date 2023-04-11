
import { axiosInstance } from "service/API/axios"


export const getRecipeById = async id => {
  const response = await axiosInstance.get(`/recipes/${id}`);
  return response.data;
};

// export const addToFavorite = async id => {
//   console.log(id);
//   const response = await axiosInstance.put(`/favorite/add/${id}`);
//   console.log(response.message);
//   return response.data;
// };

// export const removeFromFavorite = async id => {
//   console.log(id);
//   const response = await axiosInstance.delete(`/favorite/del/${id}`);
//   console.log(response.message);
//   return response.data;
// };
