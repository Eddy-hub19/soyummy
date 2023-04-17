import styled from "styled-components";
import { theme } from "../../theme/theme";
import bgrImageMob from "../../images/mobile/mainpage1x_mob.png";
import bgrImageTab from "../../images/tablet/mainpage1x_tab.png";
import bgrImageDesk from "../../images/desktop/mainpage1x_desk.png";
import bgrImageMob2 from "../../images/mobile/mainpage2x_mob.png";
import bgrImageTab2 from "../../images/tablet/mainpage2x_tab.png";
import bgrImageDesk2 from "../../images/desktop/mainpage2x_desk.png";

export const MainPageHero = styled.div`
  background-image: url(${bgrImageMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${(p) => p.theme.colors.bodyBg};
  display: flex;
  height: 777px;
  margin-bottom: 60px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgrImageMob2});
  }

  @media (min-width: 768px) {
    background-image: url(${bgrImageTab});
    height: 640px;
    margin-bottom: 72px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageTab2});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${bgrImageDesk});
    height: 800px;
    margin-bottom: 100px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageDesk2});
    }
  }
`;
export const Title = styled.h1`
  margin: 132px 12px 0px 12px;
  color: ${(p) => p.theme.colors.mainHeaderText};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.005em;

  @media (min-width: 768px) {
    margin: 204px 0 0px;
    font-size: 72px;
    line-height: 72px;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
    margin-right: 835px;
  }
`;

export const Span = styled.span`
  color: ${(p) => p.theme.colors.mainAccent};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const Text = styled.p`
  width: 248px;
  margin: 14px 40px 157px 40px;
  color: ${(p) => p.theme.colors.secondaryDark};
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: ${theme.letterSpacings.content};
  & br {
    display: none;
  }

  @media (min-width: 768px) {
    width: 362px;
    margin: 24px 0 32px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    & br {
      display: flex;
    }
  }

  @media (min-width: 1440px) {
    width: 465px;
    margin: 14px 0 50px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeroTextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const MainPageBg = styled.div`
  background-image: url(${bgrImageMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${(p) => p.theme.colors.bodyBg};
  display: flex;
  height: 777px;
  margin-bottom: 60px;
  padding: 0 16px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgrImageMob2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgrImageTab});
    height: 640px;
    margin-bottom: 72px;
    padding: 0 32px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageTab2});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${bgrImageDesk});
    height: 800px;
    margin-bottom: 100px;
    padding: 0 100px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageDesk2});
    }
  }
`;

export const MainPageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 767px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 1439px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;
