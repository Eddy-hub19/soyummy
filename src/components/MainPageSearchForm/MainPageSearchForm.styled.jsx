import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLinkBtn = styled(NavLink)`
  color: ${p => p.theme.colors.btnTextLight};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  position: absolute;

  padding: 53px 28px;
  min-width: 60px;
  top: -57%;
  left: 68%;

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  background-color: ${p => p.theme.colors.mainNavLinkHover};
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 768px) {
    top: -52%;
    left: 59%;
    padding: 57px 16px;
    min-width: 130px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: 67px 23px;
    min-width: 160px;
    top: -49%;
    left: 60%;
  }
`;

export const Input = styled.input`
  border: ${p => p.theme.borders.searchInput};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  width:295px;
  height:53px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size:16px;
  line-height: ${p => p.theme.lineHeights.subheader};
  border-radius: 18px 44px;
  border: none;
  background-color: transparent;
  padding-left: 32px;
  color: ${p => p.theme.colors.disabledGrey};
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width:362px;
    height:57px
  }
  @media screen and (min-width: 1440px) {
 width:510px;
 height:71px
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex;
  border-radius: 30px, 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;
