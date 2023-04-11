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


const RecipePageHero = ({ recipe }) => {
  const { _id, title, description, time } = recipe;

  const favorites = useSelector(getFavorites);
  const isFavorite = favorites.some(item => item._id === _id);
    // const favorites = useSelector(state => state.auth.user.favorite);
    // const isFavorite = favorites.some(item => item === recipe._id);
  
  const [isFav, setIsFav] = useState(isFavorite);
  const dispatch = useDispatch();

  function addToFavoriteRecipes() {
    dispatch(addFavorite(_id));
    setIsFav(true);
    return;
  };

    function removeFromFavoriteRecipes() {
      dispatch(deleteFavorite(_id));
      setIsFav(false);
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
      </RecipeHeroContainer>
    </>
  );
};

export default RecipePageHero;
