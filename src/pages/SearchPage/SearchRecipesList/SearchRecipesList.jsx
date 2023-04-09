import * as React from 'react';
import {
  GridContainer,
  GridItem,
  RecipeTitle,
} from './SearchRecipesList.styled';
import { CardImg } from 'components/CardMeal/CardMeal.styled';

const SearchRecipesList = ({ recipes }) => {
  return (
    <div>
      <GridContainer>
        {recipes &&
          recipes.map(recipe => {
            return (
              <GridItem>
                <a
                  href={`https://determined-ruby-nematode.cyclic.app/${recipe.id}`}
                >
                  <CardImg src={recipe.thumb} alt="img" />
                </a>
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </GridItem>
            );
          })}
      </GridContainer>
    </div>
  );
};

export default SearchRecipesList;
