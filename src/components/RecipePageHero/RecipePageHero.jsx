import React from 'react';
import { useSelector } from 'react-redux';

import { addFavorite, deleteFavorite } from '../../service/API/FavoritesAPI';

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

  const favorites = useSelector(state => state.favorites.data);
  console.log(favorites);
  const isFavorite = favorites.find(item => item._id === _id);
  console.log(isFavorite);

  function addToFavoriteRecipes() {
    addFavorite(_id);
  };

    function removeFromFavoriteRecipes() {
    deleteFavorite(_id);
  }

  return (
    <>
      <RecipeHeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{description}</HeroText>
        {!isFavorite ? (
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
