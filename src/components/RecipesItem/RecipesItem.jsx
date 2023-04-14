import { NavLink } from 'react-router-dom';
import { DeleteBtn } from '../DeleteBtn/DeleteBtn';
import { NavigateBtn } from '../NavigateBtn/NavigateBtn';
import { useMediaQuery } from 'hooks/useMedia';

import {
  Recipe,
  ImageWrapper,
  DataWrapper,
  TitleWrapper,
  SubTitle,
  DescrWrapper,
  TimeWrapper,
  Time,
} from './RecipesItem.styled';

export const RecipesItem = ({ ViewMode, id, text, title, img, time }) => {
  const RowDirrection = useMediaQuery('(min-width: 768px)');
  return (
    <Recipe ViewMode={ViewMode}>
      {!RowDirrection && ViewMode === 'favorite' ? (
        <NavLink to={`/recipes/${id}`}>
          <ImageWrapper ViewMode={ViewMode}>
            <img src={img} alt={title} />
          </ImageWrapper>
        </NavLink>
      ) : (
        <ImageWrapper ViewMode={ViewMode}>
          <img src={img} alt={title} />
        </ImageWrapper>
      )}
      <DataWrapper ViewMode={ViewMode}>
        <TitleWrapper>
          <SubTitle>
            <h3>{title}</h3>
          </SubTitle>
          {RowDirrection && ViewMode === 'favorite' && (
            <DeleteBtn ViewMode={ViewMode} id={id} />
          )}
          {ViewMode === 'recipes' && <DeleteBtn ViewMode={ViewMode} id={id} />}
        </TitleWrapper>
        <DescrWrapper>{text}</DescrWrapper>
        <TimeWrapper>
          <Time>{time}</Time>
          {!RowDirrection && ViewMode === 'recipes' && (
            <NavigateBtn
              navigate={`/recipes/${id}`}
              ViewMode={ViewMode}
              text="See recipe"
              styled="olive"
            />
          )}
          {!RowDirrection && ViewMode === 'favorite' && (
            <DeleteBtn ViewMode={ViewMode} id={id} />
          )}
          {RowDirrection && (
            <NavigateBtn
              navigate={`/recipes/${id}`}
              ViewMode={ViewMode}
              text="See recipe"
              styled={ViewMode === 'favorite' ? 'black' : 'olive'}
            />
          )}
        </TimeWrapper>
      </DataWrapper>
    </Recipe>
  );
};
