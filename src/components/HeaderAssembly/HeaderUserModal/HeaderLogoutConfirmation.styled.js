import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const ConfirmText = styled.p`
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-family: ${p => p.theme.fonts.btnStandart};
  color: ${p => p.theme.colors.mainDark};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.content};
    font-size: 18px;
  }
`;
export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutMenuBtn = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  background-color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.mainGreyBg
      : p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-family: ${p => p.theme.fonts.btnStandart};
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.btnHoverBg
      : p.theme.colors.btnTextLight};

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  &:hover,
  &:focus {
    color: ${p =>
      p.status === 'cancel'
        ? p.theme.colors.btnTextLight
        : p.theme.colors.btnHoverBg};
    background-color: ${p =>
      p.status === 'cancel'
        ? p.theme.colors.secondaryGrey
        : p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.btnText};
    width: calc(50% - 8px);
    font-size: 16px;
  }
`;
