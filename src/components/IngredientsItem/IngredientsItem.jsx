import React from "react";
import { useDispatch } from "react-redux";
import { addShoppingListItem } from "redux/shoplist/shoplistOperation";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IngredientsItem = ({ image, title, weight, description, recipeId }) => {
  const dispatch = useDispatch();

  const addToShoppingList = () => {
    dispatch(
      addShoppingListItem({
        nameIngredient: title,
        weight: weight,
        image: image,
        recipeId: recipeId,
      })
    );
    toast.success("Indredient added to shopping list", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  };

  return (
    <RecipeIngredientsItem>
      <Label>
        <ImageWrapper>{image ? <img src={image} alt={title} /> : <DefaultIngredient />}</ImageWrapper>
        <TextContainer>
          <IngName>{title}</IngName>
          <IngDescr>{description}</IngDescr>
        </TextContainer>
        <Weight>{weight}</Weight>
        <RealCheckbox type="checkbox" onChange={addToShoppingList} />
        <CustomCheckbox>
          <svg>
            <use href={sprite + `#icon-pick`} />
          </svg>
        </CustomCheckbox>
      </Label>
      <ToastContainer />
    </RecipeIngredientsItem>
  );
};
export default IngredientsItem;
