import styled from 'styled-components';

export const LogoutMenuBtn = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  background-color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.mainGreyBg
      : p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  font-family: ${p => p.theme.fonts.btnStandart};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-size: 14px;
  white-space: nowrap;
  color: ${p =>
    p.status === 'cancel'
      ? p.theme.colors.btnHoverBg
      : p.theme.colors.btnTextLight};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
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
    width: calc(50% - 8px);
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }
`;
