
import { axiosInstance } from "service/API/axios"


export const getRecipeById = async id => {
  const response = await axiosInstance.get(`/recipes/${id}`);
  return response.data;
};
