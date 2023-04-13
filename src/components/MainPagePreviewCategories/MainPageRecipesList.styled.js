import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 14px;

  @media (min-width: 375px) {
    justify-content: center;
    padding: 0 16px;
  }

  @media (min-width: 660px) and (max-width: 970px) {
    justify-content: space-evenly;
  }
`;

export const ItemRecipe = styled.li`
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const Item = styled.li`
  width: 300px;
  height: 323px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 0 0 7px 5px ${p => p.theme.colors.mainGrey};
  }

  :hover img {
    transform: scale(1.25);
  }

  @media (min-width: 375px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 300px;
    :nth-last-child(-n + 3) {
      display: none;
    }
  }

  @media (min-width: 501px) and (max-width: 690px) {
    :nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media (min-width: 691px) and (max-width: 970px) {
    :nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media (min-width: 970px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitlePageCategory = styled.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 50px;
  background: transparent;

  @media (min-width: 691px) and (max-width: 970px) {
    margin-left: 37px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    margin-left: 20px;
  }

  @media (max-width: 375px) {
    font-size: 28px;
    margin-left: 16px;
  }
`;

export const NavLinkBtnSeeAll = styled(NavLink)`
  background-color: #8aa936;
  max-width: 50;
  border-radius: 6px;
  font-size: 14px;
  padding: 10px 24px;
  color: white;
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    background-color: rgb(35, 38, 42);
    color: white;
  }

  @media (min-width: 691px) and (max-width: 970px) {
    margin-right: 82px;
  }

  @media (min-width: 376px) and (max-width: 915px) {
    margin-right: 22px;
  }

  @media (max-width: 375px) {
    margin-right: 10px;
  }
`;
