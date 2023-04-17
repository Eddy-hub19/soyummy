import { H3 } from "components/SubTitle/subTitle.styled";
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: ${({ isDesktop }) => (isDesktop ? "flex" : "unset")};
  gap: 121px;
  padding-bottom: 200px;
  /* margin-top: 72px; */
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledSocialTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: var(--mainTextColor);
  margin-bottom: 40px;
`;
export const StyledSocialWrepper = styled.div`
  margin-top: 72px;
`;
export const RecipeForm = styled.form`
  width: 100%;

  button {
    cursor: pointer;
  }

  .css-l4u8b9-MuiInputBase-root-MuiInput-root::after {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.mainAccent}`};
  }
`;

export const IngredientsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddRecepiSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 72px;

  @media (min-width: 768px) {
    flex-direction: unset;
    gap: 32px;
  }

  input {
    padding: 15px 0;
  }

  label[id="labelFile"] {
    width: ${({ isDesktop }) => (isDesktop ? "360px" : "280px")};
    height: ${({ isDesktop }) => (isDesktop ? "345px" : "270px")};
    background-color: #8baa36;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black !important;
    overflow: hidden;
    background-image: ${({ path }) => (path ? `url(${path})` : "unset")};
    background-size: cover;
  }

  input[type="file"] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }
`;

export const SelectComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreyBg};

  p {
    font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};

    color: ${({ localTheme }) => (localTheme === "light" ? "rgba(0, 0, 0, 0.5)" : "white")};
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainGreyBg};
    font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
    line-height: ${({ isMobile }) => (isMobile ? "1.3" : "1.5")};
    color: ${({ theme }) => theme.colors.mainBlack};

    &::placeholder {
      /* opacity: 1;
      color: rgba(0, 0, 0, 0.5); */
      color: ${({ localTheme }) => (localTheme === "light" ? "rgba(0, 0, 0, 0.5)" : "white")};
    }
  }

  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => (localTheme === "light" ? "black" : "white")};
    /* color: black; */
  }
`;

export const InputsWithSelectWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const IngredientsSection = styled.div`
  margin-top: 72px;
`;

export const RecepieSection = styled.div`
  margin-top: 72px;

  textarea {
    padding: 10px 16px;
    resize: none;
    background: #d9d9d9;
    border-radius: 6px;
    width: 100%;
    outline: none;
    border: none;
    margin-top: 24px;
    height: 155px;
    font-size: ${({ isMobile }) => (isMobile ? "14px" : "16px")};
    line-height: ${({ isMobile }) => (isMobile ? "1.3" : "1.5")};
    color: ${({ theme }) => theme.colors.mainBlack};
    font-family: inherit;
    border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};

    background-color: ${({ localTheme, theme }) => {
      return localTheme === "light" ? theme.colors.mainGreyBg : "transparent";
    }};

    &::placeholder {
      opacity: 1;
      color: ${({ theme }) => theme.colors.mainBlack};
    }
  }

  button {
    margin-top: 32px;
  }
`;

export const PopularSection = styled.div`
  margin-top: 72px;
  width: ${({ isDesktop }) => (isDesktop ? "320px" : "100%")};
  padding-bottom: 100px;
`;

export const PopularRecipe = styled.div`
  width: 100%;
  ${H3} {
    padding-bottom: 32px;
  }
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;

  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => (localTheme === "light" ? "black" : "white")};
    /* color: black;
    opacity: 0.5; */
  }

  .css-7ossxv-menu {
    color: red !important;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ValueInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};

  background-color: ${({ localTheme, theme }) => {
    return localTheme === "light" ? theme.colors.mainGreyBg : "transparent";
  }};
  border-radius: 6px;
  margin-left: ${({ isMobile }) => (isMobile ? "14px" : "32px")};

  .css-1dimb5e-singleValue {
    color: ${({ localTheme }) => {
      return localTheme === "light" ? "black" : "white";
    }};
  }
`;

export const InputUnitValue = styled.input`
  border-style: unset;
  background-color: transparent;
  display: block;
  height: 50px;
  padding: 0 8px;
  outline: none;
  width: 50px;
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const PopularItem = styled.li`
  a {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #707070;
    color: inherit;
  }
`;

export const RecipeTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeights.description};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.mainBlack};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

export const RecipeText = styled.p`
  margin-top: 3px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  color: ${({ theme }) => theme.colors.mainGrey};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${({ theme }) => theme.lineHeights.content};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
  color: ${({ theme }) => theme.colors.mainBlack};
`;

export const RecepiImg = styled.img`
  border-radius: 8px;
  height: 85px;
  width: 100px;
  margin-right: 12px;
`;

export const ButtonRemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  svg {
    fill: ${({ theme }) => theme.colors.mainBlack};
  }
`;

export const SocialLinksWrapper = styled.div`
  margin-bottom: 100px;
`;
