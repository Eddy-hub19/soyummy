import { SubTitle } from 'components/SubTitle/SubTitle';
import {
  //   PopularItem,
  PopularRecipe,
  PopularSection,
  //   RecepiImg,
  //   RecipeText,
  //   RecipeTitle,
} from 'pages/AddRecipe/addRecipe.styled';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

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
  return (
    <PopularSection isDesktop={isDesktop}>
      <PopularRecipe>
        <SubTitle text="Popular recipe" />
        {/* direction={isTablet ? 'horizontal' : 'vertical'}
        style=
        {isTablet
          ? { padding: '20px 0' }
          : { height: '480px', width: '340px', padding: '10px 0' }}
        autoplay=
        {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        slidesPerView={isTablet ? 2 : 4}
        spaceBetween={isTablet ? 30 : 10}
        freeMode={true} */}
      </PopularRecipe>
    </PopularSection>
  );
};
