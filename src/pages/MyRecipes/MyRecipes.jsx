import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchMyRecipes } from "redux/myRecipes/myRecipesOperation";
import { getMyRecipes, getMyRecipesRefreshStatus } from "redux/myRecipes/myRecipesSelectors";

import { Container } from "../../components/Container/Container";
import { Title } from "components/Title/Title";
import { RecipesItem } from "components/RecipesItem/RecipesItem";
import { EmptyPlaceholder } from "pages/EmptyPlaceholder/EmptyPlaceholder";
import { Loader } from "components/Loader/Loader";
import { Paginator } from "components/Pagination/Paginator";

import { scrollToTop } from "utils/scrollUp";

import { RecipesList, Thumb, img } from "./MyRecipes.styled";

const MyRecipes = () => {
  const dispatch = useDispatch();
  const storageRecipes = useSelector(getMyRecipes);
  const isRefreshing = useSelector(getMyRecipesRefreshStatus);

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
    dispatch(fetchMyRecipes());
    setRecipes(storageRecipes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  useEffect(() => {
    setRecipes(storageRecipes);
    setTotal(storageRecipes.length);
  }, [storageRecipes]);

  const handleChange = (event, value) => {
    setPageNumber(value);
    scrollToTop();
  };

  useEffect(() => {
    if (pageNumber <= 0) {
      setPageNumber(1);
    }
    if (total / perPage === page - 1) {
      setPageNumber(total / perPage);
    }

    history(`?page=${pageNumber}`);
    setcurrentSlice([pageNumber * perPage - 4, pageNumber * perPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, pageNumber, total]);

  return (
    <Thumb>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Title>My recipes</Title>
          {storageRecipes && storageRecipes.length > 0 ? (
            <RecipesList>
              {recipes.slice(...currentSlice).map((recipe) => {
                return (
                  <li key={recipe._id}>
                    <RecipesItem
                      ViewMode="recipes"
                      id={recipe._id}
                      img={recipe.thumb ?? img}
                      title={recipe.title ?? "No name"}
                      text={<span>{recipe.about ?? recipe.description ?? "No description"}</span>}
                      time={recipe.time ? `${recipe.time} min` : ""}
                    />
                  </li>
                );
              })}
            </RecipesList>
          ) : (
            <EmptyPlaceholder text="You currently don't have any own recipes added. Let's add some!" />
          )}
          {recipes && recipes.length > 0 && (
            <Paginator count={Math.ceil(total / perPage)} page={pageNumber} handleChange={handleChange} />
          )}
        </Container>
      )}
    </Thumb>
  );
};

export default MyRecipes;
