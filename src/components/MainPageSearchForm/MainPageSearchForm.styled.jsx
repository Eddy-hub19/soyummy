import styled from "styled-components";

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  line-height: 1.35;
  font-size: 14px;
  position: absolute;
  left: 182px;

  color: ${(p) =>
    p.styled === "black"
      ? p.theme.colors.btnTextLight
      : p.styled === "olive"
      ? p.theme.colors.btnTextLight
      : p.styled === "other"
      ? p.theme.colors.mainBtnText
      : p.styled === "transparent"
      ? p.theme.colors.mainDark
      : "red"};

  padding: 15.7px 31.72px;

  background-color: ${(p) =>
    p.styled === "black"
      ? p.theme.colors.recipeBlockBtnBg
      : p.styled === "olive"
      ? p.theme.colors.mainAccent
      : p.styled === "other"
      ? "transparent"
      : p.styled === "transparent"
      ? "transparent"
      : "red"};

  outline: none;
  border: none;

  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  text-align: center;

  border: ${({ styled, theme }) => {
    switch (styled) {
      case "other":
        return `1px solid ${theme.colors.mainAccent}`;
      case "transparent":
        return `1px solid ${theme.colors.btnTextLight}`;
      default:
        return "1px solid transparent";
    }
  }};

  cursor: pointer;
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};

  &:hover {
    color: ${({ styled, theme }) => {
      switch (styled) {
        case "black":
          return theme.colors.mainSerchHoverText;
        case "olive":
          return theme.colors.searchDropDownBg;
        case "other":
          return theme.colors.btnTextLight;
        case "transparent":
          return theme.colors.mainAccent;
        default:
          return "red";
      }
    }};
    background-color: ${({ styled, theme }) => {
      switch (styled) {
        case "black":
          return theme.colors.footerSMlinks;
        case "olive":
          return theme.colors.searchFormHoverBtn;
        case "transparent":
          return "transparent";
        case "other":
          return theme.colors.mainAccent;
        default:
          return "red";
      }
    }};
    border: ${(p) =>
      p.styled === "black"
        ? `1px solid ${p.theme.colors.mainAccent}`
        : p.styled === "olive"
        ? p.theme.borders.mainNavBord
        : p.styled === "transparent"
        ? `1px solid ${p.theme.colors.mainAccent}`
        : "1px solid transparent"};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    padding: 17px 52px;
    min-width: 130px;
    position: absolute;
    left: 228px;
  }

  @media screen and (min-width: 1440px) {
    padding: 23px 52px;
    min-width: 160px;
    position: absolute;
    left: 355px;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  border: ${(p) => p.theme.borders.mainSearchInput};
  background-color: ${(p) => p.theme.colors.mainSearchInput};
  width: 295px;
  height: 52px;
  padding-left: 30px;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${(p) => p.theme.lineHeights.subheader};
  border-radius: 18px 44px;

  color: ${(p) => p.theme.colors.disabledGrey};
  &:hover {
    border-color: rgba(35, 38, 42, 0.2);
    color: ${(p) => p.theme.colors.mainBlack};
    outline: none;
    outline: none;
  }
  &:active {
    border-color: rgba(35, 38, 42, 0.2);
    color: ${(p) => p.theme.colors.mainBlack};
    outline: none;
    outline: none;
  }
  &:focus {
    border-color: rgba(35, 38, 42, 0.2);
    color: ${(p) => p.theme.colors.mainBlack};
    outline: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: flex;
  border-radius: 30px, 80px;
  height: 100%;
  justify-content: center;
  align-items: start;
  height: 52px;
  width: 290px;
  z-index: 3;

  @media screen and (min-width: 375px) {
    padding-left: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 59px;
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 662px;
  left: 24px;

  @media screen and (min-width: 768px) {
    top: 386px;
    left: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 100px;
    top: 462px;
    left: -100px;
  }
`;
