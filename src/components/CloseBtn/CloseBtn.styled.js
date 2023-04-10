import styled from 'styled-components';

export const CloseBtnComp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 20000;

  & svg {
    width: ${p => (p.location === 'modal' ? '24px' : '32px')};
    height: ${p => (p.location === 'modal' ? '24px' : '32px')};
    stroke: ${p => p.theme.colors.mainDark};
  }
`;
