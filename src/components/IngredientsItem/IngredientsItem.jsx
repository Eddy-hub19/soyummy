import React from 'react';
import { useDispatch } from 'react-redux';
import {addShoppingListItem,} from 'redux/shoplist/shoplistOperation';
import { ReactComponent as DefaultIngredient } from 'images/svg-before sprite/paperbag.svg';
import {
  RecipeIngredientsItem,
  ImageWrapper,
  Label,
  RealCheckbox,
  CustomCheckbox,
  Weight,
  TextContainer,
  IngName,
  IngDescr,
} from './IngredientsItem.styled';
import sprite from '../../images/sprite.svg';

const IngredientsItem = ({ image, title, weight, description, recipeId }) => {
  const dispatch = useDispatch();
  
  // const userId = useSelector(state => state.auth.user._id)
  
  const addToShoppingList = () => {
    dispatch(
      addShoppingListItem({
        // userId: userId,
        nameIngredient: title,
        weight: weight,
        image: image,
        recipeId: recipeId,
      })
    );
    return;
  };

  return (
    <RecipeIngredientsItem>
      <Label>
        <ImageWrapper>
          {image ? <img src={image} alt={title} /> : <DefaultIngredient />}
        </ImageWrapper>
        <TextContainer>
          <IngName>{title}</IngName>
          <IngDescr>{description}</IngDescr>
        </TextContainer>
        <Weight>{weight}</Weight>
        <RealCheckbox
          type="checkbox"
          onChange={addToShoppingList}
        />
        <CustomCheckbox>
          <svg>
            <use href={sprite + `#icon-pick`} />
          </svg>
        </CustomCheckbox>
      </Label>
    </RecipeIngredientsItem>
  );
};
export default IngredientsItem;
