import { NavLink } from 'react-router-dom';
import { Item } from './MainItem.styled';
import { CardImg } from 'components/CardMeal/CardMeal.styled';
//============================================================//

export const MainPageRecipesListItem = ({ recipe }) => {
  return (
    <Item
      style={{
        position: 'relative',
        marginBottom: 50,
      }}
      key={recipe._id}
    >
      <NavLink to="">
        <CardImg
          style={{
            transition: 'all 1030ms ease-out 0s',
          }}
          src={recipe.preview}
          alt="foto"
        />
        <h6>{recipe.title}</h6>
      </NavLink>
    </Item>
  );
};
// key={recipe._id}
