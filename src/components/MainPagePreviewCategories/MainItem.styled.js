import styled from 'styled-components';

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
  color: #001833;
  margin-bottom: 50px;
`;

export const BtnSeeAll = styled.button`
  width: 94px;
  height: 38px;
  background: #8aa936;
  border-radius: 6px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
