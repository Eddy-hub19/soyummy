import React from 'react';
import { nanoid } from 'nanoid';
import IngredientsItem from 'components/IngredientsItem/IngredientsItem';

const RecipeIngredientsList = ({ ingredients }) => {

    return (
        <ul>
            {ingredients.map(ingredient => (
            <IngredientsItem
                key={nanoid()}
                image={ingredient.thb}
                title={ingredient.ttl}
                weight={ingredient.t ? ingredient.t : ''}
                description={ingredient.desc}
            //   list={list}
            // recipeId={recipeId + index}
            />
            ))}
            </ul>
  );
};

export default RecipeIngredientsList;


