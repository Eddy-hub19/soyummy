import React from "react";
import { nanoid } from "nanoid";

import { InngredientsWrapper } from "./RecipeIngredientsList.styled";
import IngredientsItem from "components/IngredientsItem/IngredientsItem";

const RecipeIngredientsList = ({ recipeId, ingredients }) => {
  return (
    <InngredientsWrapper>
      {ingredients.map((ingredient) => (
        <IngredientsItem
          key={nanoid()}
          image={ingredient.thb}
          title={ingredient.ttl}
          weight={ingredient.measure ? ingredient.measure : ""}
          description={ingredient.desc}
          recipeId={recipeId}
          ingregientId={ingredient._id}
        />
      ))}
    </InngredientsWrapper>
  );
};

export default RecipeIngredientsList;
