import { useState, useEffect } from 'react';
// import axios from 'axios';

import { Container } from '../../components/Container/Container';
import { Title } from 'components/Title/Title';
import { RecipesItem } from 'components/RecipesItem/RecipesItem';
import { EmptyPlaceholder } from 'pages/EmptyPlaceholder/EmptyPlaceholder';

import { RecipesList, Thumb, img } from './MyRecipes.styled';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDgwMzczOSwiZXhwIjoxNjgwODc1NzM5fQ.-5p_ctZKnrl0pznckvPazc6dnJqmaDDkKaP0OcqvQfE';

    try {
      const response = await fetch(
        `https://determined-ruby-nematode.cyclic.app/favorite/`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = await response.json();

      setRecipes(data.result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Thumb>
      <Container>
        <Title>My recipes</Title>
        {recipes && recipes.length > 0 ? (
          <RecipesList>
            {recipes.map(recipe => {
              return (
                <li key={recipe._id}>
                  <RecipesItem
                    ViewMode="recipes"
                    id={recipe._id}
                    img={recipe.thumb ?? img}
                    title={recipe.title ?? 'No name'}
                    text={
                      <span>
                        {recipe.about ?? recipe.description ?? 'No description'}
                      </span>
                    }
                    time={recipe.time ? `${recipe.time} min` : ''}
                  />
                </li>
              );
            })}
          </RecipesList>
        ) : (
          <EmptyPlaceholder text="You currently don't have any own recipes added. Let's add some!" />
        )}
      </Container>
    </Thumb>
  );
};

export default MyRecipes;
