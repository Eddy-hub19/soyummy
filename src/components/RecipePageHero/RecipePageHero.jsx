import React from 'react';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import sprite from '../../images/sprite.svg';
import {
    RecipeHeroContainer,
    RecHeroCont,
  HeroTitle,
    HeroText,
    CookingTime
} from './RecipePageHero.styled';
// import { Loader } from 'components/Loader/Loader';

const RecipePageHero = ({ recipe }) => {
    console.log(recipe);
    const { title, description, time, ingredients } = recipe;
    console.log(ingredients);

    return (
        <>
            {/* <RecHeroCont> */}
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
                {/* </RecHeroCont> */}
            </>
    )};

export default RecipePageHero;