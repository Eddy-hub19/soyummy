import React from 'react';
import { nanoid } from 'nanoid';

import { InngredientsWrapper } from './RecipeIngredientsList.styled';
import IngredientsItem from 'components/IngredientsItem/IngredientsItem';

const RecipeIngredientsList = ({ ingredients }) => {
console.log(ingredients);
    return (
        <InngredientsWrapper>
            {ingredients.map(ingredient => (
            <IngredientsItem
                key={nanoid()}
                image={ingredient.thb}
                title={ingredient.ttl}
                weight={ingredient.measure? ingredient.measure : ''}
                description={ingredient.desc}
            //   list={list}
            // recipeId={recipeId + index}
            />
            ))}
            </InngredientsWrapper>
  );
};

export default RecipeIngredientsList;


