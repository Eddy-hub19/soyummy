import { CardMeal } from 'components/CardMeal/CardMeal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RowTable } from './CategoriesByName.styled';
import { getAllRecipesByCategoryAPI } from 'service/API/CategoriesAPI';
import { LoaderAbsolute } from 'components/LoaderAbsolute/LoaderAbsolute';


const CategoriesByName = () => {
    const { categoryName } = useParams();
    
    function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const category = capitalizeWord(categoryName)

    useEffect(() => {
      
      try {
      setIsLoading(true)
      const categorys = getAllRecipesByCategoryAPI(category);

      categorys.then(data => {
        return setRecipes(data);
      });
    } catch (error) {
      console.log(error)
    } finally {setIsLoading(false)}
    }, [categoryName, category]);

  


    return (
      <RowTable>
          {isLoading ? <LoaderAbsolute/> : recipes.map(meal => (<CardMeal meal={meal} key={meal._id} />))}
      </RowTable>
    );
};

export default CategoriesByName;