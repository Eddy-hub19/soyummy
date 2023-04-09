import styled from 'styled-components';

export const HeaderModalOverlay = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;
export const ModalWindow = styled.div`
  display: flex;
  position: relative;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 330px;
  padding: ${p => (p.status === 'logout' ? '44px 24px' : '32px 24px')};
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
    padding: ${p => (p.status === 'logout' ? '50px' : '60px 50px')};
    width: 500px;
  }
`;

export const HeaderCloseBtnWrapper = styled.div`
  position: absolute;
  right: 29px;
  top: 29px;
`;
