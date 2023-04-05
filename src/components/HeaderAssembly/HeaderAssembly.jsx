import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'hooks/useMediaRequest';
import { getName, getAvatar } from 'redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import {
  BurgerButton,
  BurgerWrapper,
  HeaderBox,
  HeaderWrapper,
  LogoWrapper,
  MobileMenuHeaderContainer,
  MobileMenuThemeChangeWrapper,
  MobileMenuWrapper,
  NavigationLinkStyled,
} from './HeaderAssembly.styled';
import logo from '../../images/svg-before sprite/logo_desc.svg';
import { HeaderNavigation } from 'components/HeaderAssembly/HeaderNavigation/HeaderNavigation';
import { HeaderUserLogo } from 'components/HeaderAssembly/HeaderUserLogo/HeaderUserLogo';
import { Container } from 'components/Container/Container';
import { ThemeChange } from 'components/ThemeSwitch/ThemeSwitch';
import { CloseBtnAssembly } from 'components/CloseButtonAssembly/CloseBtnAssembly';

export const HeaderAssembly = () => {
  const { pathname } = useLocation();
  const isRowBased = useMediaQuery('(min-width: 1440px)');
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState('light');
  const [navColor, setNavColor] = useState('light');
  const [burgerColor, setBurgerColor] = useState('light');

  useEffect(() => {
    if (pathname.includes('main') || pathname.includes('recipe')) {
      setColor('dark');
    } else {
      setColor('light');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('recipe')) {
      setNavColor('dark');
    } else {
      setNavColor('light');
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('recipe')) {
      setBurgerColor('light');
    } else if (pathname.includes('main')) {
      setBurgerColor('tab-light');
    } else {
      setBurgerColor('dark');
    }
  }, [pathname]);

  const userName = useSelector(getName);
  const userAvatar = useSelector(getAvatar);

  const toggleMobileMenu = e => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {isRowBased ? (
        <HeaderBox>
          <Container>
            <HeaderWrapper>
              <LogoWrapper>
                <NavigationLinkStyled to="/main">
                  <img src={logo} alt="logo" />
                </NavigationLinkStyled>
              </LogoWrapper>
              <HeaderNavigation navColor={navColor} />
              <HeaderUserLogo
                color={color}
                name={userName}
                avatarUrl={userAvatar}
              />
              <ThemeChange />
            </HeaderWrapper>
          </Container>
        </HeaderBox>
      ) : (
        <>
          <HeaderBox>
            <Container>
              <HeaderWrapper>
                <LogoWrapper>
                  <NavigationLinkStyled to="/main">
                    <img src={logo} alt="logo" />
                  </NavigationLinkStyled>
                </LogoWrapper>
                <BurgerWrapper>
                  <HeaderUserLogo
                    color={navColor}
                    name={userName}
                    avatarUrl={userAvatar}
                  />
                  <BurgerButton
                    type="button"
                    onClick={toggleMobileMenu}
                    color={burgerColor}
                  >
                    <svg>
                      <use href={sprite + `#menu`} />
                    </svg>
                  </BurgerButton>
                </BurgerWrapper>
              </HeaderWrapper>
            </Container>
          </HeaderBox>
          <MobileMenuWrapper isShown={showMenu}>
            <MobileMenuHeaderContainer>
              <LogoWrapper>
                <NavigationLinkStyled
                  to="/main"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <img src={logo} alt="logo" />
                </NavigationLinkStyled>
              </LogoWrapper>
              <CloseBtnAssembly onClick={toggleMobileMenu} />
            </MobileMenuHeaderContainer>
            <HeaderNavigation setShowMenu={setShowMenu} />
            <MobileMenuThemeChangeWrapper>
              <ThemeChange />
            </MobileMenuThemeChangeWrapper>
          </MobileMenuWrapper>
        </>
      )}
    </>
  );
};
