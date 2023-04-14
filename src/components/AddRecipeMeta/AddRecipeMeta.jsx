import {
  AddRecepiSection,
  InputsWithSelectWrapper,
  InputsWrapper,
  SelectComp,
} from 'pages/AddRecipe/addRecipe.styled';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { timeOptionsList } from 'utils/timeOptionsList';
import icons from '../../images/sprite.svg';
import { stylesMeta } from 'pages/AddRecipe/selectStyles';
import { getCategoryListAPI } from 'service/API/Addrecipes';
import store from 'store';

export const AddRecipeMeta = ({
  inputs,
  isDesktop,
  handleFile,
  handleChange,
  handleSelect,
  path,
  file,
  isMobile,
}) => {
  const theme = store.get('theme');
  const [items, setItems] = useState([]);
  useEffect(() => {
    const handleEffect = async () => {
      try {
        const allCategories = await getCategoryListAPI();

        setItems([...allCategories]);

        if (allCategories.length === 0) {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      handleEffect();
    }, 1);
  }, []);

  const options = items.map(item => ({
    label: item,
    value: item,
  }));

  return (
    <AddRecepiSection isDesktop={isDesktop} path={path}>
      <div>
        <label htmlFor="file" id="labelFile">
          {file ? (
            <img src={URL.createObjectURL(file)} alt="preview" />
          ) : (
            <svg width="50" height="50">
              <use href={`${icons}#icon-img`} alt="ico" />
            </svg>
          )}
        </label>
        <input type="file" id="file" name="file" onChange={handleFile} />
      </div>
      <InputsWrapper localTheme={theme} isMobile={isMobile}>
        <input
          placeholder="Enter item title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          placeholder="Enter about recipe"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          autoComplete="off"
        />
        <InputsWithSelectWrapper>
          <SelectComp localTheme={theme} isMobile={isMobile}>
            <p>Categories</p>

            <Select
              styles={stylesMeta(theme)}
              options={options}
              defaultValue={{
                label: inputs.category,
                value: inputs.category,
              }}
              placeholder=""
              onChange={handleSelect}
              name="category"
            />
          </SelectComp>
        </InputsWithSelectWrapper>
        <InputsWithSelectWrapper>
          <SelectComp localTheme={theme} isMobile={isMobile}>
            <p>Cooking time</p>
            <Select
              styles={stylesMeta(theme)}
              options={timeOptionsList()}
              defaultValue={{ label: inputs.time + ' min', value: inputs.time }}
              placeholder=" "
              onChange={handleSelect}
              name="time"
            />
          </SelectComp>
        </InputsWithSelectWrapper>
      </InputsWrapper>
    </AddRecepiSection>
  );
};
