import styled from "styled-components";
import { Field, Form } from "formik";

import PlusIcon from "../../../images/plus.svg";

export const UserForm = styled(Form)`
  input[type="file"] {
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
    padding: 0;
    display: block;
    position: absolute;
  }

  & img {
    height: 88px;
    width: 88px;
    border-radius: ${(p) => p.theme.radii.circle};

    @media screen and (min-width: 768px) {
      height: 103px;
      width: 103px;
    }
  }
`;

export const UserSvgWrapper = styled.div`
  display: flex;
  position: relative;
  height: 88px;
  width: 88px;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.radii.circle};
  background-color: ${(p) => p.theme.colors.mainGreyBg};

  & svg {
    height: 40px;
    width: 40px;
    stroke: ${(p) => p.theme.colors.secondaryGreyBg};
  }

  &::after {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: flex-end;
    right: 0;
    bottom: -3%;
    transform: translateX(-50%);
    content: url(${PlusIcon});
    width: 24px;
    height: 26px;
    background-color: ${(p) => p.theme.colors.mainAccent};
    border-radius: ${(p) => p.theme.radii.circle};
  }

  @media screen and (min-width: 768px) {
    height: 103px;
    width: 103px;

    & svg {
      height: 47px;
      width: 47px;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 33px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const NameInput = styled(Field)`
  outline: none;
  font-size: 14px;
  width: 250px;
  padding: 14px;
  padding-left: 63px;
  background-color: transparent;
  border-radius: ${(p) => p.theme.radii.btnStandart};
  font-family: ${(p) => p.theme.fonts.main};

  font-weight: ${(p) => p.theme.fontWeights[0]};
  letter-spacing: ${(p) => p.theme.letterSpacings.content};
  line-height: ${(p) => p.theme.lineHeights.subheader};
  color: ${(p) => p.theme.colors.mainDark};

  border: 2px solid ${({ color }) => color};

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 420px;
  }
`;

export const NameLabel = styled.label`
  position: relative;
  width: 100%;
`;

export const UserIcon = styled.svg`
  position: absolute;
  height: 18px;
  width: 18px;
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);
  stroke: ${({ color }) => color};
`;

export const SaveChangesBtn = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 14px;
  font-size: 14px;
  white-space: nowrap;
  background-color: ${(p) => p.theme.colors.mainAccent};
  border-radius: ${(p) => p.theme.radii.btnStandart};
  font-family: ${(p) => p.theme.fonts.btnStandart};
  font-weight: ${(p) => p.theme.fontWeights[0]};
  line-height: ${(p) => p.theme.lineHeights.extraContent};
  color: ${(p) => p.theme.colors.btnTextLight};

  transition: ${(p) => p.theme.transitions.main};

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${(p) => p.theme.lineHeights.btnText};
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.btnHoverBg};
  }
`;

export const BtnWrapper = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);

  transition: ${(p) => p.theme.transitions.main};

  & svg {
    stroke: ${(p) => p.theme.colors.mainDark};
    height: 18px;
    width: 18px;
  }
`;

export const FlagInput = styled.svg`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  height: 18px;
  width: 18px;
  box-sizing: border-box;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: red;
  top: 50%;
  left: ${(p) => (p.location === "file" ? "24px" : "0")};
  font-size: 11px;
  transform: ${(p) => (p.location === "file" ? "translateY(-150%)" : "translateY(-50%)")};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    left: ${(p) => (p.location === "file" ? "40px" : "0")};
  }

  @media screen and (min-width: 1440px) {
    left: ${(p) => (p.location === "file" ? "50px" : "0")};
  }
`;
