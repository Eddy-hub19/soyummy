import styled from 'styled-components';

export const HeaderModalOverlay = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  align-items: space-between;
  justify-content: center;
  flex-direction: column;
  width: 330px;
  padding: ${p => (p.status === 'logout' ? '44px 24px' : '32px 24px')};
  display: flex;
  background-color: ${p => p.theme.colors.bodyBg};
  border-radius: ${p => p.theme.radii.modal};
  opacity: 1;
  z-index: 20000;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding: 50px 40px;
    width: 480px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: ${p => (p.status === 'logout' ? '50px' : '60px 50px')};
  }
`;

export const HeaderCloseBtnWrapper = styled.div`
  position: absolute;
  right: 29px;
  top: 29px;
`;
