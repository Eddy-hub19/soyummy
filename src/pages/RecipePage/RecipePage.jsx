import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";
import { getRecipeById } from "../../service/axios/axios";
import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { TableHeader} from './RecipePage.styled';
import { TableHeader, Container} from './RecipePage.styled';
// import { Container } from 'components/Container/Container';

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
                <Container>
                    <TableHeader>
                    <p>Ingredients</p>
                    <p>Number <span>Add to list</span></p>
                    </TableHeader>
                    <RecipeIngredientsList ingredients={recipe.ingredients} />
                    <RecipePreparation instructions={recipe.instructions} image={recipe.thumb} />
                </Container>
            </>
        ));
};


export default RecipePage;