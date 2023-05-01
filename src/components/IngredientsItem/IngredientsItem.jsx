import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShoppingListItem, deleteShoppingListItem } from "redux/shoplist/shoplistOperation";
import { ReactComponent as DefaultIngredient } from "images/svg-before sprite/paperbag.svg";
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
} from "./IngredientsItem.styled";
import sprite from "../../images/sprite.svg";

const IngredientsItem = ({ ingregientId, image, title, weight, description, recipeId }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  //   console.log(checked);
  // }

  const updateShoppingList = (event) => {
    console.log(checked);
    console.log(ingregientId);
    if (checked) {
    dispatch(deleteShoppingListItem(ingregientId));
    setChecked(event.target.checked);
    } else {
    dispatch(addShoppingListItem({
          nameIngredient: title,
          weight: weight,
          image: image,
          recipeId: recipeId,
        })
      );
    setChecked(event.target.checked);
    }
    // setChecked(event.target.checked);
    // return;
    };
  
  // const updateShoppingList = (event) => {
  //   if (!checked) {
  //     dispatch(
  //       addShoppingListItem({
  //         nameIngredient: title,
  //         weight: weight,
  //         image: image,
  //         recipeId: recipeId,
  //       })
  //     );
  //   setChecked(event.target.checked);
  //   } else {
  //     dispatch(deleteShoppingListItem(ingregientId));
  //     setChecked(event.target.checked);
  //   }
  //   setChecked(event.target.checked);
  //   return;
  // };

  // const addToShoppingList = () => {
  //   dispatch(
  //     addShoppingListItem({
  //       nameIngredient: title,
  //       weight: weight,
  //       image: image,
  //       recipeId: recipeId,
  //     })
  //   );
  //   return;
  // };

  return (
    <RecipeIngredientsItem>
      <Label>
        <ImageWrapper>{image ? <img src={image} alt={title} /> : <DefaultIngredient />}</ImageWrapper>
        <TextContainer>
          <IngName>{title}</IngName>
          <IngDescr>{description}</IngDescr>
        </TextContainer>
        <Weight>{weight}</Weight>
        <RealCheckbox type="checkbox" onChange={updateShoppingList} />
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
