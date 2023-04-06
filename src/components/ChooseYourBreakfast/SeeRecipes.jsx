import { NavLink } from 'react-router-dom';
//====================================================//
export const SeeRecipes = () => {
  return (
    <div style={{ border: 'solid 1px black' }}>
      <p>
        Delicious and healthy way to enjoy a variety of fresh ingredients in one
        satisfying meal
      </p>
      <NavLink to="">See recipes</NavLink>;
    </div>
  );
};
