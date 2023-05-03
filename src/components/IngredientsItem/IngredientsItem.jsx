import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingList, addShoppingListItem, deleteShoppingListItem } from "redux/shoplist/shoplistOperation";
import { getShoppingList } from "../../redux/shoplist/shoplistSelectors";
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

const IngredientsItem = ({ ingregientId, image, title, weight, description, recipeId }) => {
  const dispatch = useDispatch();
  const storedItems = useSelector(getShoppingList);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchShoppingList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const updateShoppingList = (event) => {
    dispatch(fetchShoppingList());

    if (checked) {
      const itemToDelete = storedItems.find((item) => item.nameIngredient === title);
      dispatch(deleteShoppingListItem(itemToDelete._id));
      setChecked(event.target.checked);
      toast.success("Ingridient removed from Shopping List", { position: "top-right", autoClose: 2000 });
    } else {
      dispatch(
        addShoppingListItem({
          nameIngredient: title,
          weight: weight,
          image: image,
          recipeId: recipeId,
        })
      );
      setChecked(event.target.checked);
      toast.success("Ingridient added to Shopping List", { position: "top-right", autoClose: 2000 });
    }
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
        <RealCheckbox type="checkbox" onChange={updateShoppingList} />
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
