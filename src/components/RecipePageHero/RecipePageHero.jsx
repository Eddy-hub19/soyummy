import React from 'react';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {getFavorites} from "../../redux/favorites/favoritesSelectors"

import {fetchFavorites, addFavorite, deleteFavorite} from "../../redux/favorites/favoritesOperation"
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import sprite from '../../images/sprite.svg';
import {
  RecipeHeroContainer,
  HeroTitle,
  HeroText,
  CookingTime,
} from './RecipePageHero.styled';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const RecipePageHero = ({ recipe }) => {
  const { _id, title, description, time } = recipe;

  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some(item => item._id === _id);
  
  const [isFav, setIsFav] = useState(isFavorite);
  const dispatch = useDispatch();

  function addToFavoriteRecipes() {
    dispatch(addFavorite(_id));
    setIsFav(true);
    toast.success("Recipe added to favorite", {position: "top-center", autoClose: 3000,});
    return;
  };

    function removeFromFavoriteRecipes() {
      dispatch(deleteFavorite(_id));
      setIsFav(false);
      toast.success("Recipe removed from favorite", {position: "top-center", autoClose: 3000,});
      return;
    }
  
  useEffect(() => {
    dispatch(fetchFavorites({}));
  }, [dispatch, isFav]);

  return (
    <>
      <RecipeHeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{description}</HeroText>
        {!isFav ? (
          <ButtonSkew
            type="button"
            text="Add to favorite recipes"
            styled="other"
            location="recipes"
            fn={addToFavoriteRecipes}
          />
        ) : (
          <ButtonSkew
            type="button"
            text="Remove from favorite recipes"
            styled="other"
            location="recipes"
            fn={removeFromFavoriteRecipes}
          />
        )}
        {time !== '' ? (
          <CookingTime>
            <svg>
              <use href={sprite + `#icon-clock`} />
            </svg>
            <span>{time + ` min`}</span>
          </CookingTime>
        ) : (
          <CookingTime></CookingTime>
        )}
        <ToastContainer />
      </RecipeHeroContainer>
    </>
  );
};

export default RecipePageHero;
