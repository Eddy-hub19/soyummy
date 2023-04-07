import { useEffect, useState } from 'react';
import { getIngradientsFieldsApi } from 'service/axios/axios';

export const RecipeIngredientsFields = () => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const ingredients = await getIngradientsFieldsApi();
      setIngredients(ingredients);
      console.log(ingredients);
    }

    fetchData();
  }, []);

  return (
    <ul>
      <h2>RecipeIngredientsFields</h2>
      {ingredients.map(item => {
        return console.log(item);
      })}
    </ul>
  );
};
