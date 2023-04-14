import styled from 'styled-components';

import img from '../../images/default.jpg';

export { img };
export const RecipesList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  & li {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const Thumb = styled.div`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 100px;
  }
`;
