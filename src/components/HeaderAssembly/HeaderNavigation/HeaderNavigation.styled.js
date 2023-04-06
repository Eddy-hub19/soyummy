import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  font-size: 18px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p =>
    p.selection === 'true'
      ? p.theme.colors.mainAccent
      : p.navcolor === 'light'
      ? p.theme.colors.mainDark
      : p.theme.colors.userName};
  transition: ${p => p.theme.transitions.main};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: ${p => p.theme.lineHeights.headerLinks};
    font-size: 14px;
  }

  & span {
    display: flex;

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & svg {
    height: 20px;
    width: 20px;
    stroke: ${p =>
      p.selection === 'true'
        ? p.theme.colors.mainAccent
        : p.navcolor === 'light'
        ? p.theme.colors.mainDark
        : p.theme.colors.userName};

    @media screen and (min-width: 768px) {
      height: 24px;
      width: 24px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    flex-direction: row;
    margin-left: 180px;
    margin-right: 220px;
    gap: 30px;
  }
`;
