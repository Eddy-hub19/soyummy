import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  gap: 28px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 14px;
  }
`;

export const GridItem = styled.li`
  border-radius: 8px;
  position: relative;
  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0 0 7px 5px ${p => p.theme.colors.mainGrey};
  }

  a {
    display: block;
    overflow: hidden;
    border-radius: 8px;

    :hover img {
      transform: scale(1.25);
      filter: contrast(130%);
    }
  }
`;

export const RecipeTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.mainHeaderText};
  padding: 16px;
  background-color: ${p => p.theme.colors.recipeBlockBg};
  position: absolute;
  top: 245px;
  left: 16px;
  border-radius: 8px;
  width: calc(100% - 64px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
