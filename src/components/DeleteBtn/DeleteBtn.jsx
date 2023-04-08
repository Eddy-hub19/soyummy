import { useDispatch } from 'react-redux';

import { Wrapper, sprite } from './DeleteBtn.styled';
import { deleteFavorite } from 'redux/favorites/favoritesOperation';
import { deleteMyRecipe } from 'redux/myRecipes/myRecipesOperation';

export const DeleteBtn = ({ ViewMode, id }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    if (ViewMode === 'favorite') {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(deleteMyRecipe(id));
    }
  };
  return (
    <Wrapper type="button" onClick={handleDeleteBtnClick} ViewMode={ViewMode}>
      <svg>
        <use href={sprite + `#trash`} />
      </svg>
    </Wrapper>
  );
};
