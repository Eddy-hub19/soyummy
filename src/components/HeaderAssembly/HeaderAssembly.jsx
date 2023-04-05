import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
<<<<<<< Updated upstream
import { useMediaQuery } from 'hooks/useMediaRequest';
=======
import { useMediaQuery } from 'hooks/useMedia';
>>>>>>> Stashed changes
import { getName, getAvatar } from 'redux/auth/authSelectors';
import sprite from '../../images/sprite.svg';
import {
  BurgerButton,
  BurgerWrapper,
  HeaderBox,
  HeaderWrapper,
  LogoWrapper,
  MobileMenuHeaderContainer,
<<<<<<< Updated upstream
  MobileMenuThemeChangeWrapper,
=======
  MobileMenuThemeTogglerWrapper,
>>>>>>> Stashed changes
  MobileMenuWrapper,
  NavigationLinkStyled,
} from './HeaderAssembly.styled';
import logo from '../../images/svg-before sprite/logo_desc.svg';
import { HeaderNavigation } from 'components/HeaderAssembly/HeaderNavigation/HeaderNavigation';
import { HeaderUserLogo } from 'components/HeaderAssembly/HeaderUserLogo/HeaderUserLogo';
import { Container } from 'components/Container/Container';
<<<<<<< Updated upstream
import { ThemeChange } from 'components/ThemeSwitch/ThemeSwitch';
=======
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <ThemeChange />
=======
              <ThemeToggler />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <MobileMenuThemeChangeWrapper>
              <ThemeChange />
            </MobileMenuThemeChangeWrapper>
=======
            <MobileMenuThemeTogglerWrapper>
              <ThemeToggler />
            </MobileMenuThemeTogglerWrapper>
>>>>>>> Stashed changes
          </MobileMenuWrapper>
        </>
      )}
    </>
  );
};
