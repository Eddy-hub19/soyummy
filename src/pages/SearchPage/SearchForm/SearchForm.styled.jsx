import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  line-height: ${(p) => p.theme.lineHeights.subheader};
  font-size: 14px;
  position: absolute;

  color: ${(p) => p.theme.colors.btnTextLight};

  padding: 53px 28px;
  min-width: 60px;
  top: -57%;
  left: 68%;

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  background-color: ${(p) => p.theme.colors.mainAccent};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.mainBlack};
  }

  @media screen and (min-width: 768px) {
    top: -57%;
    left: 61%;
    padding: 57px 16px;
    min-width: 130px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${(p) => p.theme.lineHeights.btnText};
    padding: 67px 23px;
    min-width: 160px;
    top: -51%;
    left: 62%;
  }
`;

export const Input = styled.input`
  border: ${(p) => p.theme.borders.searchInput};
  background-color: ${(p) => p.theme.colors.secondaryAccent};
  width: 295px;
  height: 53px;

  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${(p) => p.theme.lineHeights.subheader};
  border-radius: 18px 44px;
  padding-left: 32px;
  color: ${(p) => p.theme.colors.disabledGrey};
  &:hover {
    border-color: rgba(35, 38, 42, 0.2);
    color: ${(p) => p.theme.colors.mainBlack};
    outline: none;
  }
  &:active {
    border-color: rgba(35, 38, 42, 0.2);
    color: ${(p) => p.theme.colors.mainBlack};
    outline: none;
  }
  &:focus {
    color: ${(p) => p.theme.colors.mainBlack};
    border-color: rgba(35, 38, 42, 0.2);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 71px;
  }
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

export const TitleDropdpwn = styled.label`
  font-family: ${(p) => p.theme.fonts.main};
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeights[1]};
  line-height: 24px;
  letter-spacing: ${(p) => p.theme.letterSpacings.subheader};
  color: ${(p) => p.theme.colors.sectionHeader};

  @media (min-width: 768px) {
    font-size: 14px;
    top: 29%;
    left: 25%;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    top: 26%;
    left: 34%;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  margin-bottom: 90px;
  color: ${(p) => p.theme.colors.searchSelectBg};
`;
