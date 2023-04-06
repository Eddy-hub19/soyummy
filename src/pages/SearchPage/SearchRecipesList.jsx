import * as React from 'react';
import Recipe from './Recipe';

const SearchRecipesList = ({ recipes }) => {
  return (
    <ul>
      {recipes &&
        recipes.map(recipe => {
          return <Recipe key={recipe._id} recipe={recipe} />;
        })}
    </ul>
  );
};

export default SearchRecipesList;
