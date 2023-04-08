import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import icons from '../../images/sprite.svg';
import { getIngradientsFieldsApi } from 'service/axios/axios';

import {
  ButtonRemoveItem,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputUnitValue,
  ValueInputWrapper,
} from 'pages/AddRecipe/addRecipe.styled';
// import { ingredientsOptionsList } from 'utils/ingredientsOptionsList';
// import { useSelector } from 'react-redux';
// import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { unitsOptionsList } from 'utils/unitsOptionsList';
import { stylesIngredient, stylesUnit } from 'pages/AddRecipe/selectStyles';

export const AddRecipeIngredients = ({
  counter,
  userIngredients,
  isMobile,
  handleDecrement,
  handleIncrement,
  // handleUserIngredient,
  handleUnitValue,
  handleRemove,
  localTheme,
}) => {
  // const optionsIngredients = useSelector(getIngredients);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const ingredientsObj = await getIngradientsFieldsApi();
        const allIngredients = ingredientsObj.ingredients;
        const options = allIngredients.map(ingr => ({
          label: ingr.ttl,
          value: ingr.ttl,
        }));

        setOptions([...options]);

        // if (allCategories.length === 0) {
        //   return;
        // }
      } catch (error) {
        console.log(error);
      }
    };
    handleEffect();
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelect(selectedOption) {
    setSelectedOption(selectedOption);
  }
  const userIngredientsList = userIngredients.map(
    ({ id, unitValue, ingredient, qty }) => {
      return (
        <IngredientsItem key={id} localTheme={localTheme}>
          <Select
            styles={stylesIngredient(localTheme)}
            options={options}
            value={selectedOption}
            placeholder=" "
            onChange={handleSelect}
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
              placeholder=" "
              onChange={handleSelect}
              value={selectedOption}
              // isSearchable={false}
              // name={`qty ${id}`}
            />
          </ValueInputWrapper>
          <ButtonRemoveItem type="button" id={id} onClick={handleRemove}>
            <svg width={20} height={20}>
              <use href={icons + '#icon-cross'}></use>
            </svg>
          </ButtonRemoveItem>
        </IngredientsItem>
      );
    }
  );
  return (
    <IngredientsSection>
      <IngredientsTitle>
        <SubTitle text="Ingredients" />
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </IngredientsTitle>
      <IngredientsList>{userIngredientsList}</IngredientsList>
    </IngredientsSection>
  );
};
