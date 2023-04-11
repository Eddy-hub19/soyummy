import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
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
    /* filter: contrast(130%); */
  }
`;

export const TitlePageCategory = styled.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.sectionHeader};
  margin-bottom: 50px;
  background: transparent;
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
`;
