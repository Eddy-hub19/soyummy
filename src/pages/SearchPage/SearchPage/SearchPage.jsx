import * as React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import SearchRecipesList from "../SearchRecipesList/SearchRecipesList";
import { OtherButton, Wrapper, Text, ContainerForm } from "../SearchPage/SearchPage.styled";
import { EmptyPlaceholder } from "pages/EmptyPlaceholder/EmptyPlaceholder";
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
    axiosInstance
      .get(`recipes/search/${keyword}?page=${page}&limit=${LIMIT}&searchType=${searchType}`)
      .then(function (data) {
        if (data.data.recepies.length === 0) {
          setStatus("rejected");
          console.log("error");
        } else {
          console.log(data.data.recepies);
          setRecipes(
            [...recipes, ...data.data.recepies].filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
          );
          setHasMore(data.data.nextPage);
          setStatus("resolved");
        }
      })
      .catch(function (error) {});

    // eslint-disable-next-line
  }, [page, keyword, LIMIT, status]);

  return (
    <ContainerForm>
      <SearchForm handleSubmit={handleSubmit} query={keyword} type={searchType} />
      <SearchRecipesList key={recipes._id} recipes={recipes} id={recipes._id} />
      <Wrapper>
        {recipes.length !== 0 && hasMore && (
          <OtherButton type="button" onClick={loadNextPage}>
            Other categories
          </OtherButton>
        )}
        {status === "rejected" && (
          <Text>
            <EmptyPlaceholder text={MESSAGE} />
          </Text>
        )}
      </Wrapper>
    </ContainerForm>
  );
};

export default SearchPage;
