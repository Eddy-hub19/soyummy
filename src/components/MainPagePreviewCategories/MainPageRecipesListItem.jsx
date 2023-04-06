import { NavLink } from 'react-router-dom';
//============================================================//

export const MainPageRecipesListItem = ({ recipe }) => {
  return (
    <li
      style={{
        border: 'solid 1px red',
        position: 'relative',
        marginBottom: 50,
      }}
      key={recipe._id}
    >
      <NavLink to="">
        <img src={recipe.preview} alt="foto" />
        <h6>{recipe.title}</h6>
      </NavLink>
    </li>
  );
};
// key={recipe._id}
