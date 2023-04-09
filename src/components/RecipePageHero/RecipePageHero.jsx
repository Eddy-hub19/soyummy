import React from 'react';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import sprite from '../../images/sprite.svg';

// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addToFavorite } from '../../service/API/RecipeAPI';
import {
  RecipeHeroContainer,
  HeroTitle,
  HeroText,
  CookingTime,
} from './RecipePageHero.styled';

const RecipePageHero = ({ recipe }) => {
  const { _id, title, description, time } = recipe;

  const favorites = useSelector(state => state.favorites);
  console.log(favorites.data);
  const isFavorite = favorites.data.some(item => item._id === recipe._id);

  function addToFavoriteRecipes() {
    addToFavorite(_id);
  }

  return (
    <>
      <RecipeHeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{description}</HeroText>
        {!isFavorite && (
          <ButtonSkew
            type="button"
            text="Add to favorite recipes"
            styled="other"
            location="recipes"
            fn={addToFavoriteRecipes}
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
