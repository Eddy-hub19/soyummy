import { CardMeal } from 'components/CardMeal/CardMeal';
// import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getLimitedRecipesByCategory } from 'redux/outerRecipes/outerRecipesOperations';
// import { getLimitedRecipes } from 'redux/outerRecipes/outerRecipesSelectors';
import { RowTable } from './CategoriesByName.styled';
import { getAllRecipesByCategoryAPI } from 'service/axios/axios';
import { LoaderAbsolute } from 'components/LoaderAbsolute/LoaderAbsolute';

const CategoriesByName = () => {
    const { categoryName } = useParams();
    
    function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

    const [recipes, setRecipes] = useState([]);
    const category = capitalizeWord(categoryName)

    useEffect(() => {
      
    try {
      const categorys = getAllRecipesByCategoryAPI(category);

      categorys.then(data => {
        return setRecipes(data);
      });
    } catch (error) {
      console.log(error)
    }
    }, [categoryName, category]);
  
  console.log('recipes.length:', recipes.length)

  


    return (
      <RowTable>
        {recipes.length === 0 && <LoaderAbsolute/>}
            {recipes.map(meal => (
                <CardMeal meal={meal} key={meal._id} />
            ))}
        </RowTable>
    );
};

export default CategoriesByName;