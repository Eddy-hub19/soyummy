// import { SubTitle } from 'components/SubTitle/SubTitle';
import { getPopularListAPI } from 'service/axios/axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import //   PopularItem,
//   PopularRecipe,
//   PopularSection,
//   RecepiImg,
//   RecipeText,
//   RecipeTitle,
'pages/AddRecipe/addRecipe.styled';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {
  StyledPopTitle,
  StyledPopitem,
  ImgWrapper,
  TextWrapper,
  ItemTitle,
  Description,
} from './AddPopular.styled';
export const AddRecipePopular = ({ isDesktop, isTablet, localTheme }) => {
  //   const popularList = popularRecepis.map(
  //     ({ idMeal, strMealThumb, strInstructions, strMeal }) => (

  //         <PopularItem as={'div'}>
  //           <Link to={`/recipe/${idMeal}`}>
  //             <RecepiImg src={strMealThumb} alt={strMeal} />
  //             <div>
  //               <RecipeTitle>{strMeal}</RecipeTitle>
  //               <RecipeText>{strInstructions}</RecipeText>
  //             </div>
  //           </Link>
  //         </PopularItem>

  //     )
  //   );

  const [popularOpt, setPopularOpt] = useState([]);

  useEffect(() => {
    const handleEffect = async () => {
      try {
        const popularOptObj = await getPopularListAPI();
        const popelarArray = popularOptObj.result;
        const firstFour = popelarArray.slice(0, 4);
        console.log(firstFour);

        setPopularOpt([...firstFour]);

        // if (allCategories.length === 0) {
        //   return;
        // }
      } catch (error) {
        console.log(error);
      }
    };
    handleEffect();
  }, []);

  //{ _id, thumb, strInstructions, title }

  return (
    <div>
      <StyledPopTitle>Popular recipe</StyledPopTitle>
      {popularOpt.length > 0 && (
        <ul>
          {popularOpt.map(({ _id, thumb, instructions, title }) => {
            const link = `/recipe/${_id}`;
            return (
              <StyledPopitem key={_id}>
                <Link to={link}>
                  <ImgWrapper>
                    <img src={thumb} alt={title} />
                  </ImgWrapper>
                  <TextWrapper>
                    <ItemTitle>
                      {title.length > 30 ? title.slice(0, 35) + '...' : title}
                    </ItemTitle>
                    <Description>{instructions.slice(0, 80)}...</Description>
                  </TextWrapper>
                </Link>
              </StyledPopitem>
            );
          })}
        </ul>
      )}
      {popularOpt.length === 0 && <p>No popular recipes</p>}
    </div>
  );
};
