import styled from 'styled-components';

export const UserMenu = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: calc(100% + 14px);
  gap: 28px;
  transform: translateX(-50px);
  right: 0;
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
  align-items: center;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
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
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 10px;
  white-space: nowrap;
  gap: 4px;
  padding: 12px 30px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.btnTextLight};
  background-color: ${p => p.theme.colors.mainAccent};
  border: 1px solid transparent;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  outline: none;
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.mainNavBord};
    background-color: ${p => p.theme.colors.searchFormHoverBtn};
    color: ${p => p.theme.colors.mainSerchHoverText};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainSerchHoverText};
  }

  & svg {
    height: 18px;
    width: 18px;
    transition: ${p => p.theme.transitions.main};
    stroke: ${p => p.theme.colors.btnTextLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    line-height: ${p => p.theme.lineHeights.btnText};
    font-size: 16px;
  }
`;
