import { getPopularListAPI } from 'service/API/Addrecipes';
import { useState, useEffect } from 'react';

import {
  StyledPoularList,
  StyledList,
  StyledLink,
  StyledPopTitle,
  StyledPopitem,
  ImgWrapper,
  TextWrapper,
  ItemTitle,
  Description,
} from './AddPopular.styled';
export const AddRecipePopular = () => {
  const [popularOpt, setPopularOpt] = useState([]);

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const popularOptObj = await getPopularListAPI();
        const popelarArray = popularOptObj.result;
        const firstFour = popelarArray.slice(0, 4);

        setPopularOpt([...firstFour]);

        if (firstFour.length === 0) {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      handleEffect();
    }, 1);
  }, []);
  return (
    <StyledPoularList>
      <StyledPopTitle>Popular recipe</StyledPopTitle>
      {popularOpt.length > 0 && (
        <StyledList>
          {popularOpt.map(({ _id, thumb, instructions, title }) => {
            const link = `/recipes/${_id}`;
            return (
              <StyledPopitem key={_id}>
                <StyledLink to={link}>
                  <ImgWrapper>
                    <img src={thumb} alt={title} />
                  </ImgWrapper>
                  <TextWrapper>
                    <ItemTitle>
                      {title.length > 30 ? title.slice(0, 35) + '...' : title}
                    </ItemTitle>
                    <Description>{instructions.slice(0, 80)}...</Description>
                  </TextWrapper>
                </StyledLink>
              </StyledPopitem>
            );
          })}
        </StyledList>
      )}
      {popularOpt.length === 0 && <Description>No popular recipes</Description>}
    </StyledPoularList>
  );
};
