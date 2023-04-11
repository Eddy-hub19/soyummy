import * as React from 'react';
import {
  GridContainer,
  GridItem,
  RecipeTitle,
} from './SearchRecipesList.styled';
import { CardImg } from 'components/CardMeal/CardMeal.styled';
import { NavLink } from 'react-router-dom';

const SearchRecipesList = ({ recipes, _id }) => {
  return (
    <div>
      <GridContainer>
        {recipes &&
          recipes.map(recipe => {
            return (
              <GridItem>
                <NavLink to={`/recipes/${_id}`}>
                  {/* <a
                  href={`https://determined-ruby-nematode.cyclic.app/${recipe.id}`}
                > */}
                  <CardImg src={recipe.thumb} alt="img" />
                  {/* </a> */}
                </NavLink>
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </GridItem>
            );
          })}
      </GridContainer>
    </div>
  );
};

export default SearchRecipesList;
