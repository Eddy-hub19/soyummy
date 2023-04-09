import styled from 'styled-components';

export const LogOutModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const TextConfirm = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.extraContent};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacings.content};

  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
