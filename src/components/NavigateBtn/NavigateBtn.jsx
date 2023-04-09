// import { NavigateTo } from './NavigateBtn.styled';

import { useDispatch } from 'react-redux';

import { addFavorite } from 'redux/favorites/favoritesOperation';

export const NavigateBtn = ({ navigate, text, styled, location }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    dispatch(addFavorite('640cd5ac2d9fecf12e8897f2'));
  };

  return (
    <button typeof="button" onClick={handleDeleteBtnClick}>
      ADD
    </button>
    // <NavigateTo location={location} styled={styled} to={navigate}>
    //   {text}
    // </NavigateTo>
  );
};
