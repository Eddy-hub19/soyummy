import styled from 'styled-components';

export const UserMenu = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: calc(100% + 14px);
  right: 0;
  transform: translateX(-50px);
  gap: 28px;
  padding: 18px;
  background-color: ${p => p.theme.colors.bodyBg};
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.image};

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EditProfileBtn = styled.button`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.headerLinks};
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};

  & svg {
    stroke: currentColor;
    height: 14px;
    width: 14px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;

export const LogOutBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 10px;
  gap: 4px;
  padding: 12px 30px;
  border: 1px solid transparent;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 80px;
  border-top-left-radius: 30px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: ${p => p.theme.colors.mainAccent};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.mainNavBord};
    color: ${p => p.theme.colors.mainSerchHoverText};
    background-color: ${p => p.theme.colors.searchFormHoverBtn};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainSerchHoverText};
  }

  & svg {
    height: 18px;
    width: 18px;
    stroke: ${p => p.theme.colors.btnTextLight};
    transition: ${p => p.theme.transitions.main};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }
`;
