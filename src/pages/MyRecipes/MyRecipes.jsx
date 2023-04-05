import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '../../components/Container/Container';
import { RecipesList, Thumb } from './MyRecipes.styled';
import { RecipesItem } from 'components/RecipesItem/RecipesItem';

import img from '../../images/default.jpg';

////// TERMERARY!!!!!
import styled from 'styled-components';
import sq_black_6 from '../../images/sq_black_6.png';
import sq_black_12 from '../../images/sq_black_12.png';
import sq_green_8 from '../../images/sq_green_8.png';
import sq_green_14 from '../../images/sq_green_14.png';
import circle_white from '../../images/white-circle.png';
import sq_white from '../../images/white-rectangle.png';

import searchMob1 from '../../images/bg/bgSearch/bg_search_mob@1x.png';
import searchMob2 from '../../images/bg/bgSearch/bg_search_mob@2x.png';
import searchTablet1 from '../../images/bg/bgSearch/bg_search_tablet@1x.png';
import searchTablet2 from '../../images/bg/bgSearch/bg_search_tablet@2x.png';
import searchDesktop1 from '../../images/bg/bgSearch/bg_search_desktop@1x.png';
import searchDesktop2 from '../../images/bg/bgSearch/bg_search_desktop@2x.png';

///// temporary solution, later I will create a separate component for reuse

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDcxODk0NSwiZXhwIjoxNjgwNzkwOTQ1fQ.Br0-7kCiS2iycEusHFsxHrSPl9MppWT8lWXS6T9KXW0';

    try {
      const response = await fetch(
        `https://determined-ruby-nematode.cyclic.app/favorite/`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = await response.json();

      setRecipes(data.result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Thumb>
      <Container>
        <Title>My recipes</Title>
        {recipes.length > 0 ? (
          <RecipesList>
            {recipes.map(recipe => {
              return (
                <li key={recipe._id}>
                  <RecipesItem
                    location="recipes"
                    id={recipe._id}
                    img={recipe.thumb ?? img}
                    title={recipe.title ?? 'No name'}
                    text={
                      <span>
                        {recipe.about ?? recipe.description ?? 'No description'}
                      </span>
                    }
                    time={recipe.time ? `${recipe.time} min` : ''}
                  />
                </li>
              );
            })}
          </RecipesList>
        ) : (
          <EmptyPlaceholder text="You currently don't have any own recipes added. Let's add some!" />
        )}
      </Container>
    </Thumb>
  );
};

////// TERMERARY!!!!!
const Title = ({ children }) => {
  return (
    <Wrapper mode={'ligth'}>
      <h2>{children}</h2>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 192px;
  padding-top: 114px;
  z-index: -1;
  box-sizing: border-box;
  background-image: ${p =>
    p.mode === 'light'
      ? `url(${sq_green_8}), url(${sq_black_6}), url(${sq_green_8})`
      : `url(${sq_green_8}), url(${circle_white}), url(${sq_green_8})`};
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: top 80px left 104px, top 145px left 231px,
    top 112px left 329px;

  @media screen and (min-width: 768px) {
    height: 240px;
    padding-top: 136px;

    background-image: ${p =>
      p.mode === 'light'
        ? `url(${sq_green_14}), url(${sq_black_12}),
      url(${sq_green_14})`
        : `url(${sq_green_14}), url(${sq_white}),
      url(${sq_green_14})`};
    background-repeat: no-repeat;
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: top 91px left 187px, top 160px left 405px,
      top 104px left 682px;
  }

  @media screen and (min-width: 1440px) {
    height: 308px;
    padding-top: 164px;
    background-position: top 122px left 228px, top 205px left 707px,
      top 135px left 1150px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.sectionHeader};

    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 32px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 44px;
      line-height: 44px;
    }
  }
`;

const EmptyPlaceholder = ({ text }) => {
  return (
    <EmptyDiv>
      <EmptyImgDiv>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${searchDesktop1}, ${searchDesktop2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${searchTablet1}, ${searchTablet2} 2x`}
          />
          <img
            src={searchMob1}
            srcSet={`${searchMob1}, ${searchMob2} 2x`}
            alt="no items found"
          />
        </picture>
      </EmptyImgDiv>
      <EmptyTitle>{text}</EmptyTitle>
    </EmptyDiv>
  );
};

export const EmptyDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EmptyTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  text-align: center;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainBlack};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EmptyImgDiv = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;

///// temporary solution, later I will create a separate component for reuse

export default MyRecipes;
