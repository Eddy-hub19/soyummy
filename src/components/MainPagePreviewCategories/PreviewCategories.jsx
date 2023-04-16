import { useState, useEffect } from "react";
import { MainPageRecipesList } from "./MainPageRecipesList";
import { axiosInstance } from "service/API/axios";

const fetchRecipes = async () => {
  try {
    const { data: recipes } = await axiosInstance.get("/recipes/main-page");
    return recipes;
  } catch (error) {
    return error.message;
  }
};

export const PreviewCategories = () => {
  const [mainPageRecipes, setMainPageRecipes] = useState(null);

  useEffect(() => {
    fetchRecipes().then((recipes) => setMainPageRecipes(recipes));
  }, []);

  return (
    <div>
      {/*CATEGORIES LIST */}
      {mainPageRecipes && <MainPageRecipesList recipes={mainPageRecipes} />}
    </div>
  );
};
