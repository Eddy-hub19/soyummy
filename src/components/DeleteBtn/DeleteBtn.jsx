// import { useDispatch } from 'react-redux';

import { Wrapper, sprite } from './DeleteBtn.styled';
// import {
//   deleteFavorite,
//   deleteOwnRecipe,
// } from 'redux/ownRecipes/ownRecipesOperations';

export const DeleteBtn = ({ ViewMode, id }) => {
  // const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    // if (ViewMode === 'favorite') {
    //   dispatch(deleteFavorite(id));
    // } else {
    //   dispatch(deleteOwnRecipe(id));
    // }
    console.log(handleDeleteBtnClick);
  };
  return (
    <Wrapper type="button" onClick={handleDeleteBtnClick} ViewMode={ViewMode}>
      <svg>
        <use href={sprite + `#trash`} />
      </svg>
    </Wrapper>
  );
};
