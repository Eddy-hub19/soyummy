import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';
//============================================================//

const fetchRecipes = async () => {
  try {
    const { data: recipes } = await axios.get(
      'https://determined-ruby-nematode.cyclic.app/recipes/main-page'
    );

    return recipes;
  } catch (error) {
    return error.message;
  }
};

//======================================================
export const PreviewCategories = () => {
  const [mainPageRecipes, setMainPageRecipes] = useState(null);

  useEffect(() => {
    fetchRecipes().then(recipes => setMainPageRecipes(recipes));
  }, []);
  console.log(mainPageRecipes);
  return (
    <div>
      <p>Preview categories</p>

      {/*CATEGORIES LIST */}
      {mainPageRecipes && (
        <ul style={{ listStyle: 'none' }}>
          <li>
            <h4>Breakfast</h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              {mainPageRecipes.breakfast.map(recipe => {
                return (
                  <li style={{ border: 'solid 1px red' }}>
                    <NavLink to="">
                      <img src={recipe.preview} alt="foto" />
                      <h6>{recipe.title}</h6>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h4>Miscellaneous</h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              {mainPageRecipes.miscellaneous.map(recipe => {
                return (
                  <li style={{ border: 'solid 1px red' }}>
                    <NavLink to="">
                      <img src={recipe.preview} alt="foto" />
                      <h6>{recipe.title}</h6>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h4>Chicken</h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              {mainPageRecipes.chicken.map(recipe => {
                return (
                  <li style={{ border: 'solid 1px red' }}>
                    <NavLink to="">
                      <img src={recipe.preview} alt="foto" />
                      <h6>{recipe.title}</h6>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h4>Desserts</h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}
            >
              {mainPageRecipes.desserts.map(recipe => {
                return (
                  <li style={{ border: 'solid 1px red' }}>
                    <NavLink to="">
                      <img src={recipe.preview} alt="foto" />
                      <h6>{recipe.title}</h6>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};
