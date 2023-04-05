import styled from 'styled-components';
import bgImg from '../../images/tablet/mainTab-min.png';

export const ButtonList = styled.ul`
  display: flex;
`;

export const BgImg = styled.div`
  margin: auto;
  height: 100vh;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: cover;
`;
