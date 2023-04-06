import * as React from 'react';

const Recipe = ({ recipe }) => {
  const { title, thumb } = recipe;
  return (
    <li>
      <a href={`http://localhost:3001/recipes/${recipe.id}`}>
        {title}
        <img src={thumb} alt="img" width={240} height={240} />
      </a>
    </li>
  );
};

export default Recipe;
