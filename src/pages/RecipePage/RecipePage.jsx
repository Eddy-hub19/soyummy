import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { getRecipeById } from "../../service/axios/axios";
import React from "react";
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
// import  from '@mui/material/Button';


const RecipePage = () => {
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = useParams();
    console.log(recipeId);
    //   const location = useLocation();
    //   const backLinkHref = location.state?.from ?? '/recipes';

    useEffect(() => {
        getRecipeById(recipeId).then(setRecipe);
    }, [recipeId]);


    console.log(recipe);
    return (
        recipe !== null && (
            <>
                <RecipePageHero recipe={recipe} />
                <div>
                    <RecipeIngredientsList ingredients={recipe.ingredients} />
                    <RecipePreparation instructions={recipe.instructions} />
                </div>
                
            </>
        ));
};


export default RecipePage;