import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { getRecipeById } from "../../service/axios/axios";
import React from "react";
import { useState, useEffect } from 'react';
// import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
// import  from '@mui/material/Button';


const RecipePage = ({ id = "640cd5ac2d9fecf12e8897ef" }) => {
    const [recipe, setRecipe] = useState(null);
    //   const { id } = useParams();
    //   const location = useLocation();
    //   const backLinkHref = location.state?.from ?? '/recipes';

    useEffect(() => {
        getRecipeById(id).then(setRecipe);
    }, [id]);


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