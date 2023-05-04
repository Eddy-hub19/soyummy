import * as React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import SearchRecipesList from "../SearchRecipesList/SearchRecipesList";
import { OtherButton, Wrapper, Text, Thumb, ContainerForm } from "../SearchPage/SearchPage.styled";
import { EmptyPlaceholder } from "pages/EmptyPlaceholder/EmptyPlaceholder";
import { Loader } from "components/Loader/Loader";
import { axiosInstance } from "service/API/axios";

const SearchPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchParams] = useSearchParams();
  const rKeyword = searchParams.get("query");
  const [keyword, setKeyword] = React.useState(rKeyword ?? "");
  const [status, setStatus] = React.useState("idle");
  const [hasMore, setHasMore] = React.useState(false);
  const rSearchType = searchParams.get("type");
  const [searchType, setSearchType] = React.useState(rSearchType ?? "title");
  const [isLoading, setisLoading] = React.useState(false);

  const loadNextPage = () => {
    setPage(page + 1);
  };
  const LIMIT = 12;
  const MESSAGE = "Sorry, not found. Try something else";

  const handleSubmit = async ({ keyword, searchType }) => {
    console.log("submit");
    setPage(1);
    setKeyword(keyword);
    setSearchType(searchType);
    setStatus("idle");
    setRecipes([]);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    setisLoading(true);
    axiosInstance
      .get(`recipes/search/${keyword}?page=${page}&limit=${LIMIT}&searchType=${searchType}`)
      .then(function (data) {
        if (data.data.recepies.length === 0 && !recipes.length) {
          setStatus("rejected");
          console.log("no recipes found");
        } else {
          console.log(data.data);
          setRecipes(
            [...recipes, ...data.data.recepies].filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
          );
          setHasMore(data.data.nextPage);
          setStatus("resolved");
        }
      })
      .catch(function (error) {
        console.log("no recipes found");
      })
      .finally(() => {
        setisLoading(false);
      });

    // eslint-disable-next-line
  }, [page, keyword, LIMIT, status]);

  return (
    <Thumb>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerForm>
          <SearchForm handleSubmit={handleSubmit} query={keyword} type={searchType} />
          <SearchRecipesList recipes={recipes} />
          <Wrapper>
            {recipes.length !== 0 && hasMore && (
              <OtherButton type="button" onClick={loadNextPage}>
                More recipes
              </OtherButton>
            )}
            {status === "rejected" && (
              <Text>
                <EmptyPlaceholder text={MESSAGE} />
              </Text>
            )}
          </Wrapper>
        </ContainerForm>
      )}
    </Thumb>
  );
};

export default SearchPage;
