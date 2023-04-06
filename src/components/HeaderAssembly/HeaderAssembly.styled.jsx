import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import BgTablet1x from '../../images/bg/mobile-menu-bg-tab-1x-min.png';
import BgTablet2x from '../../images/bg/mobile-menu-bg-tab-2x-min.png';
import BgMobile1x from '../../images/bg/mobile-menu-bg-mob-1x-min.png';
import BgMobile2x from '../../images/bg/mobile-menu-bg-mob-2x-min.png';

export const HeaderBox = styled.header`
  position: absolute;
  box-sizing: border-box;
  z-index: 10;
  height: 100px;
  width: 100%;
  padding-top: 18px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationLinkStyled = styled(NavLink)`
  & img {
    height: 40px;
    width: 40px;

    @media screen and (min-width: 768px) {
      height: 44px;
      width: 44px;
    }
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: 0;

  & svg {
    height: 28px;
    width: 28px;
    stroke: ${p =>
      p.color === 'light'
        ? p.theme.colors.burgerRecipeBtn
        : p.theme.colors.mainDark};

    @media screen and (min-width: 768px) {
      height: 32px;
      width: 32px;
      stroke: ${p =>
        p.color === 'tab-light' || p.color === 'light'
          ? p.theme.colors.burgerRecipeBtn
          : p.theme.colors.mainDark};
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  position: fixed;
  box-sizing: border-box;
  z-index: 200;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 18px;
  transform: ${p =>
    p.isShown ? 'translate3d(0, 0vh, 0)' : 'translate3d(0, -100vh, 0)'};
  transition: transform 1s cubic-bezier(0, 0.52, 0, 1);
  justify-content: space-between;
  flex-direction: column;
  align-items: space-between;
  background-color: ${p => p.theme.colors.secondaryAccent};
  background-image: url(${BgMobile1x});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgMobile2x});
  }

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
    background-image: url(${BgTablet1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgTablet2x});
    }
  }
`;

export const MobileMenuHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileMenuThemeSwitchWrapper = styled.div`
  display: flex;
`;
