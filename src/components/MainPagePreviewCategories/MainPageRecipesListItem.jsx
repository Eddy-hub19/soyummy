import { NavLink } from 'react-router-dom';
import { Item } from './MainPageRecipesList.styled';
import { CardImg, CardTitle } from 'components/CardMeal/CardMeal.styled';

export const MainPageRecipesListItem = ({ recipe }) => {
  return (
    <Item
      style={{
        position: 'relative',
        marginBottom: 50,
      }}
      key={recipe._id}
    >
      <NavLink to={`/recipes/${recipe._id}`}>
        <CardImg
          style={{
            transition: 'all 1030ms ease-out 0s',
          }}
          src={recipe.preview}
          alt="photo"
        />
        <CardTitle>{recipe.title}</CardTitle>
      </NavLink>
    </Item>
  );
};
