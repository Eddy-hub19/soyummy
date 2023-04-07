import React from 'react';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import sprite from '../../images/sprite.svg';
import {
  RecipeHeroContainer,
  HeroTitle,
    HeroText,
    CookingTime
} from './RecipePageHero.styled';
// import { Loader } from 'components/Loader/Loader';

const RecipePageHero = ({ recipe }) => {
    const { title, description, time,  } = recipe;
    
    return (
        <>
            <RecipeHeroContainer>
            {/* <Loader></Loader> */}
            <HeroTitle>{title}</HeroTitle>
            <HeroText>{description}</HeroText>
            <ButtonSkew
                type="button"
                text="Add to favorite recipes"
                styled="other"
                location="recipes"
                // fn={addtoFavorite}
                />

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
    )};

export default RecipePageHero;
