import React from 'react';
import {ReactComponent as Clock} from 'images/svg-before sprite/clock.svg';

const RecipePageHero = ({ recipe }) => {
    const { title, description, time,  } = recipe;
    return (
        // <div style={"background-image: url('./images/recipe_hero_mob_1x.jpg'); width: 375px; height: 455px;}" >
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <button type="button">Add to favorite recipes</button>

            {/* <div style="display: flex; justify-content: center;"> */}
            <div>
                {/* <img src="images/clock.svg" /> */}
                <Clock/>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default RecipePageHero;
