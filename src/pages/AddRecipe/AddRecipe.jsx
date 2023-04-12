import { useEffect, useState, useRef } from 'react';
import { useMediaRules } from 'hooks/MediaRules';
import { nanoid } from '@reduxjs/toolkit';
import store from 'store';

import { axiosInstance } from 'service/API/axios';
import { scrollToTop } from 'utils/scrollUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from 'components/Title/Title';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container/Container';
import { AddRecipePopular } from 'components/AddRecipePopular/AddRecipePopular';
import { AddRecipeMeta } from 'components/AddRecipeMeta/AddRecipeMeta';
import { AddRecipeIngredients } from 'components/AddRecipeIngredients/AddRecipeIngredients';
import { AddRecipeSubmit } from 'components/AddRecipeSubmit/AddRecipeSubmit';

import { AddRecipeToastifyError } from 'components/AddRecipeToastifyError/AddRecipeToastifyError';
import { FollowUs } from 'components/FollowUs/FollowUs';

import {
  RecipeForm,
  MainWrapper,
  StyledSocialWrepper,
} from './addRecipe.styled';

const init = {
  instructions: '',
  title: '',
  description: '',
  category: 'Breakfast',
  time: '30',
  unitValue: 100,
  path: '',
  thumb: '',
  preview: null,
  area: '',
};

const AddRecipe = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { isDesktop, isMobile, isTablet } = useMediaRules();
  const isFirstRender = useRef(true);

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
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // убирает ошибку при первом рендере!!
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

    // console.log(inputs);
    const { instructions, time, category, description, title } = inputs;
    // ПРОВЕРКА НА ЗАПОЛНЕНОСТЬ ПОЛЕЙ
    if (!instructions || !time || !category || !description || !title) {
      toast.error('Please fill out all fields');
      return;
    }
    setisLoading(true);
    scrollToTop();
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
      const response = await axiosInstance.post('/auth/picture', formData);

      const imageUrl = response.data.secure_url;

      const data = {
        instructions,
        time,
        category,
        description,
        title,
        ingredients,
        imageUrl,
        path: imageUrl,
        thumb: imageUrl,
        preview: imageUrl,
        area: 'Kyiv',
      };

      // console.log('Form data:', data);
      const addRecipe = await axiosInstance.post('/own-recipes/add', data);
      if (addRecipe) {
        // console.log('Recipe add succes');
        setInputs(init);
        toast.success('Recipe added successfully');
      }
      setisLoading(false);
    } catch (error) {
      // console.error('Error:', error.message);
      // console.log('Error Response:', error.response);
      toast.error(<AddRecipeToastifyError />);
      setisLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
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
              <ToastContainer />
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
      )}
    </>
  );
};

export default AddRecipe;
