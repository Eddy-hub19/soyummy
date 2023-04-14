import styled from 'styled-components';
import {theme} from '../../theme/theme'

import mob1 from '../../images/mobile/recipeHero_mob_1x.jpg';
import mob2 from '../../images/mobile/recipeHero_mob_2x.jpg';
import tab1 from '../../images/tablet/recipeHero_tab_1x.jpg';
import tab2 from '../../images/tablet/recipeHero_tab_2x.jpg';
import desktop1 from '../../images/desktop/recipeHero_desktop_1x.jpg';
import desktop2 from '../../images/desktop/recipeHero_desktop_2x.jpg';

import { ButtonSkewStyle } from 'components/ButtonSkew/buttonSkew.styled';

export const RecipeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-image: url(${mob1});
  background-repeat: no-repeat;
  width: 100% !important;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  background-size: 100%;

  ${ButtonSkewStyle} {
    margin-top: 0;
    padding: 10px 18px;
    color: black;

    @media screen and (min-width: 768px) {
      padding-bottom: 90px;
      padding: 18px 44px;
    }
    @media screen and (min-width: 1440px) {
    }

    &:hover {
      /* color: white; */
    }
  }

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mob2});
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;
    width: 768px;
    height: 495px;
    background-image: url(${tab1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tab2});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-top: 164px;
    height: 493px;
    background-image: url(${desktop1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desktop2});
    }
  }
`;

export const HeroTitle = styled.title`
  display: block;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 18px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainAccent};

  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: clip;

  @media screen and (min-width: 768px) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const HeroText = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  color: ${theme.colors.secondaryDark};
  
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  width: 303px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: clip;
  hyphens: auto;

  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    -webkit-line-clamp: 3;
    margin-bottom: 15px;
    width: 656px;
  }
`;

export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: black;
  margin-top: 42px;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  height: 14px;

  @media screen and (min-width: 768px) {
    height: 20px;
    margin-top: 65px;
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.time};
  }
  @media screen and (min-width: 1440px) {
    margin-top: 48px;
  }

  & svg {
    margin-right: 5px;
    stroke: black;
    display: inline-block;
    width: 14px;
    height: 14px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (min-width: 1440px) {
    }
  }
`;
