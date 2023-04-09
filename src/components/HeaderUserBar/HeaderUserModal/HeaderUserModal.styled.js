import styled from 'styled-components';

export const ModalBox = styled.div`
  position: absolute;

  top: calc(100% + 14px);
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.bodyBg};

  border-radius: 8px;
  padding: 18px;
  gap: 28px;
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.image};
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.headerLinks};
  font-size: 14px;
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};
  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;
export const LogoutBtn = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 4px;
  background-color: ${p => p.theme.colors.mainAccent};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.headerLinks};
  font-size: 10px;
  white-space: nowrap;
  align-items: center;
  text-align: center;
  color: ${p => p.theme.colors.btnTextLight};
  padding: 12px 30px;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
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
    width: 18px;
    height: 18px;
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
