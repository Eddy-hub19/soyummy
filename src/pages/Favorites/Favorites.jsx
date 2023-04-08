import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

import { Container } from '../../components/Container/Container';
import { Title } from 'components/Title/Title';
import { RecipesItem } from 'components/RecipesItem/RecipesItem';
import { EmptyPlaceholder } from 'pages/EmptyPlaceholder/EmptyPlaceholder';
import { Loader } from 'components/Loader/Loader';
import { Paginator } from 'components/Pagination/Paginator';

import { scrollToTop } from 'utils/scrollUp';

import { RecipesList, Thumb, img } from './Favorites.styled';

const Favorites = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentSlice, setcurrentSlice] = useState([0, 4]);
  const history = useNavigate();
  const { search } = useLocation();
  const page = search.slice(-1);

  const [pageNumber, setPageNumber] = useState(+page);

  const perPage = 4;

  useEffect(() => {
    try {
      setisLoading(true);
      fetchRecipes();
    } catch (error) {
    } finally {
    }
  }, []);

  const fetchRecipes = async () => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';

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
      setisLoading(false);

      setTotal(data.result.length);

      setRecipes(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, value) => {
    setPageNumber(value);
    scrollToTop();
  };

  useEffect(() => {
    console.log(Math.ceil(total / perPage));
    if (pageNumber <= 0 || pageNumber > Math.ceil(total / perPage)) {
      setPageNumber(1);
    }

    history(`?page=${pageNumber}`);
    setcurrentSlice([pageNumber * perPage - 4, pageNumber * perPage]);
  }, [history, pageNumber, total]);

  return (
    <Thumb>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Title>My recipes</Title>
          {recipes && recipes.length > 0 ? (
            <RecipesList>
              {recipes.slice(...currentSlice).map(recipe => {
                return (
                  <li key={recipe._id}>
                    <RecipesItem
                      ViewMode="favorite"
                      id={recipe._id}
                      img={recipe.thumb ?? img}
                      title={recipe.title ?? 'No name'}
                      text={
                        <span>
                          {recipe.about ??
                            recipe.description ??
                            'No description'}
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
          {recipes && recipes.length > 0 && (
            <Paginator
              count={Math.ceil(total / perPage)}
              page={pageNumber}
              handleChange={handleChange}
            />
          )}
        </Container>
      )}
    </Thumb>
  );
};

export default Favorites;
