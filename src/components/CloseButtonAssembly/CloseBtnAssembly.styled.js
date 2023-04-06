import styled from 'styled-components';

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  background-color: transparent;
  box-sizing: border-box;
  border: none;

  & svg {
    stroke: ${p => p.theme.colors.mainDark};
    height: ${p => (p.location === 'modal' ? '24px' : '32px')};
    width: ${p => (p.location === 'modal' ? '24px' : '32px')};
  }
`;
