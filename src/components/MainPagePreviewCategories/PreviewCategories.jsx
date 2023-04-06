import { useState, useEffect } from 'react';
import { MainPageRecipesList } from './MainPageRecipesList';
import axios from 'axios';
//============================================================//

const fetchRecipes = async () => {
  try {
    const { data: recipes } = await axios.get(
      'https://determined-ruby-nematode.cyclic.app/recipes/main-page'
    );

    return recipes;
  } catch (error) {
    return error.message;
  }
};

//======================================================
export const PreviewCategories = () => {
  const [mainPageRecipes, setMainPageRecipes] = useState(null);

  useEffect(() => {
    fetchRecipes().then(recipes => setMainPageRecipes(recipes));
  }, []);

  return (
    <div>
      {/*CATEGORIES LIST */}
      {mainPageRecipes && <MainPageRecipesList recipes={mainPageRecipes} />}
    </div>
  );
};
