import styled from 'styled-components';

export const LogOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const LogOutText = styled.p`
  font-size: 14px;
  font-family: ${p => p.theme.fonts.btnStandart};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.extraContent};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;
export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  font-size: 14px;
  white-space: nowrap;
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

export const LogoutBtnCancel = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  font-size: 14px;
  background-color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.mainGreyBg
      : p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  font-family: ${p => p.theme.fonts.btnStandart};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.extraContent};
  border: ${({ theme }) => `1px solid ${theme.colors.mainGreyBg}`};
  font-size: 14px;
  white-space: nowrap;
  color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.btnHoverBg
      : p.theme.colors.btnTextLight};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};

  &:disabled {
    pointer-events: none;
    opacity: 0.8;
  }

  &:hover,
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.btnHoverBg}`};
    background-color: ${p =>
      p.status === 'cancel'
        ? p.theme.colors.mainLight
        : p.theme.colors.btnHoverBg};
    color: ${p =>
      p.status === 'cancel'
        ? p.theme.colors.btnHoverBg
        : p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: calc(50% - 8px);
    line-height: ${p => p.theme.lineHeights.btnText};
  }
`;
