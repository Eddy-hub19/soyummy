import { toast } from 'react-toastify';

import { useEffect, useState } from 'react';
import store from 'store';
// import { SocialLinks } from 'components/FooterAssembly/SocialLinks/SocialLinks';
import {
  RecipeForm,
  MainWrapper,
  StyledSocialWrepper,
} from './addRecipe.styled';
import { Title } from 'components/Title/Title';
import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'components/Container/Container';
// import { useDispatch } from 'react-redux';
import { AddRecipePopular } from 'components/AddRecipePopular/AddRecipePopular';
import { AddRecipeMeta } from 'components/AddRecipeMeta/AddRecipeMeta';
import { AddRecipeIngredients } from 'components/AddRecipeIngredients/AddRecipeIngredients';
import { AddRecipeSubmit } from 'components/AddRecipeSubmit/AddRecipeSubmit';
// import { addOwnRecipe } from 'redux/ownRecipes/ownRecipesOperations';
import { useMediaRules } from 'hooks/MediaRules';
import axios from 'axios';
import { AddRecipeToastifyError } from 'components/AddRecipeToastifyError/AddRecipeToastifyError';
import { FollowUs } from 'components/FollowUs/FollowUs';

// import { useNavigate } from 'react-router-dom';
// import { scrollToTop } from 'utils/scrollUp';

const init = {
  recipe: '',
  title: '',
  about: '',
  category: 'Breakfast',
  time: '30',
  unitValue: 100,
};

const AddRecipe = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { isDesktop, isMobile, isTablet } = useMediaRules();

  const [inputs, setInputs] = useState(() => {
    const inputs = store.get('userInputs');
    return inputs ? inputs : init;
  });

  const [file, setFile] = useState(null);

  const [userIngredients, setUserIngredients] = useState(() => {
    const ingredients = store.get('userIngredients');
    return ingredients ? ingredients : [];
  });

  const [path, setPath] = useState('');

  useEffect(() => {
    store.set('userInputs', inputs);
    store.set('userIngredients', userIngredients);
  }, [inputs, userIngredients]);

  const handleDecrement = () => {
    if (userIngredients.length <= 0) return;
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: 'Beef', unitValue: 100, qty: 'g' },
    ]);
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;

    if (!file || !file.type.includes('image')) {
      setFile(null);
      setPath('');
      return;
    }
    setFile(file);
    setPath(URL.createObjectURL(file));
  };

  // const resetForm = () => {
  //   setInputs(init);
  //   setUserIngredients([]);
  //   setFile(null);
  //   setPath('');
  // };

  // const cb = () => {
  //   scrollToTop();
  //   navigate('/my?page=1');
  //   resetForm();
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    const { recipe, time, category, about, title } = inputs;

    // собираем значения ингредиентов в отдельный массив
    const ingredients = userIngredients.map(ingredient => {
      return {
        id: ingredient.id,
        name: ingredient.ingredient,
        unitValue: ingredient.unitValue,
        qty: ingredient.qty,
      };
    });

    formData.append('file', file);
    formData.append('upload_preset', 'alex_preset');

    try {
      const response = await axios.post(
        'https://determined-ruby-nematode.cyclic.app/auth/picture',
        formData
      );

      const imageUrl = response.data.secure_url;

      const data = {
        recipe,
        time,
        category,
        about,
        title,
        ingredients,
        imageUrl,
      };

      console.log('Form data:', data);
    } catch (error) {
      console.error('Error:', error.message);
      console.log('Error Response:', error.response);
      toast.error(<AddRecipeToastifyError />);
    }
  };

  const handleSelect = (...arg) => {
    const [valueObj, nameObj] = arg;
    const { value } = valueObj;
    const { name } = nameObj;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleUserIngredient = (...args) => {
    const [{ value }, { name: dirtyName }] = args;
    const [name, id] = dirtyName.split(' ');

    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const [item] = prev.filter(el => el.id === id);
      item[name] = value;
      prev[idx] = item;
      return [...prev];
    });
  };

  const handleUnitValue = ({ currentTarget }) => {
    const { id, value, name } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));

    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const [item] = prev.filter(el => el.id === id);
      item[name] = value;
      prev[idx] = item;
      return [...prev];
    });
  };

  const theme = store.get('theme');

  return (
    <>
      <Container>
        <Title>Add recipe</Title>
        <MainWrapper isDesktop={isDesktop}>
          <RecipeForm
            onSubmit={handleSubmit}
            enctype="multipart/form-data"
            isMobile={isMobile}
            localTheme={theme}
          >
            <AddRecipeMeta
              path={path}
              inputs={inputs}
              file={file}
              isDesktop={isDesktop}
              isMobile={isMobile}
              handleFile={handleFile}
              handleChange={handleChange}
              handleSelect={handleSelect}
            />

            <AddRecipeIngredients
              counter={userIngredients.length}
              userIngredients={userIngredients}
              isMobile={isMobile}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleUserIngredient={handleUserIngredient}
              handleUnitValue={handleUnitValue}
              handleRemove={handleRemove}
              localTheme={theme}
            />

            <AddRecipeSubmit
              inputs={inputs}
              handleChange={handleChange}
              localTheme={theme}
            />
          </RecipeForm>
          <div>
            <StyledSocialWrepper>
              <FollowUs text={'Folow Us'} />
            </StyledSocialWrepper>
            <AddRecipePopular
              isDesktop={isDesktop}
              isTablet={isTablet}
              localTheme={theme}
            />
          </div>
        </MainWrapper>
      </Container>
    </>
  );
};

export default AddRecipe;
