import styled from 'styled-components';

export const LoaderBox1 = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.colors.bodyBg};
`;
