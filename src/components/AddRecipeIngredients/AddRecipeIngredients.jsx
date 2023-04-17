import { Counter } from "components/Counter/Counter";
import { SubTitle } from "components/SubTitle/SubTitle";
import { useState, useEffect } from "react";
import Select from "react-select";
import icons from "../../images/sprite.svg";

import { getIngradientsFieldsApi } from "service/API/Addrecipes";

import {
  ButtonRemoveItem,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputUnitValue,
  ValueInputWrapper,
} from "pages/AddRecipe/addRecipe.styled";

import { unitsOptionsList } from "utils/unitsOptionsList";
import { stylesIngredient, stylesUnit } from "pages/AddRecipe/selectStyles";

export const AddRecipeIngredients = ({
  counter,
  userIngredients,
  isMobile,
  handleDecrement,
  handleIncrement,
  handleTtlChange,
  handleQtyChange,
  handleUnitValue,
  handleRemove,
  localTheme,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const ingredientsObj = await getIngradientsFieldsApi();
        const allIngredients = ingredientsObj.ingredients;

        const options = allIngredients.map((ingr) => ({
          label: ingr.ttl,
          value: ingr.ttl,
          "data-id": ingr._id,
        }));

        setOptions([...options]);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      handleEffect();
    }, 1);
  }, []);
  if (options.length === 0) {
    return null;
  }

  const userIngredientsList = userIngredients.map(({ id, unitValue, qty }) => {
    return (
      <IngredientsItem key={id} localTheme={localTheme}>
        <Select
          styles={stylesIngredient(localTheme)}
          options={options}
          placeholder=" "
          onChange={handleTtlChange}
          name={`ttl ${id}`}
          getOptionData={(option) => option["data-id"]}
        />
        <ValueInputWrapper isMobile={isMobile} localTheme={localTheme}>
          <InputUnitValue
            isMobile={isMobile}
            type="text"
            name="unitValue"
            onChange={handleUnitValue}
            defaultValue={unitValue}
            autoComplete="off"
            id={id}
          />
          <Select
            styles={stylesUnit(localTheme)}
            options={unitsOptionsList}
            defaultValue={{ label: qty, value: qty }}
            placeholder=" "
            onChange={handleQtyChange}
            isSearchable={false}
            name={`qty ${id}`}
          />
        </ValueInputWrapper>
        <ButtonRemoveItem type="button" id={id} onClick={handleRemove}>
          <svg width={20} height={20}>
            <use href={icons + "#icon-cross"}></use>
          </svg>
        </ButtonRemoveItem>
      </IngredientsItem>
    );
  });
  return (
    <IngredientsSection>
      <IngredientsTitle>
        <SubTitle text="Ingredients" />
        <Counter counter={counter} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
      </IngredientsTitle>
      <IngredientsList>{userIngredientsList}</IngredientsList>
    </IngredientsSection>
  );
};
