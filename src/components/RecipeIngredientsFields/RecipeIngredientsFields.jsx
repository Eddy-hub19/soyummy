import { useEffect, useState } from 'react';
import { getIngradientsFieldsApi } from 'service/axios/axios';

export const RecipeIngredientsFields = () => {
  const [ingredients, setIngredients] = useState([{}]);

  try {
    useEffect(() => {
      async function fetchData() {
        const response = await getIngradientsFieldsApi();
        setIngredients(response.data.ingredients[0]);
      }

      fetchData();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <ul>
      <h2>RecipeIngredientsFields</h2>
      {ingredients.map(({ ttl, id }) => {
        return <li key={id}>{ttl}</li>;
      })}
    </ul>
  );
};
