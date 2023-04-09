import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import SearchRecipesList from '../SearchRecipesList/SearchRecipesList';
import { Container } from 'components/Container/Container';
import { OtherButton, Wrapper } from '../SearchPage/SearchPage.styled';
import { EmptyPlaceholder } from 'pages/EmptyPlaceholder/EmptyPlaceholder';
import { MainConteiner } from 'components/Container/Container.styled';

const SearchPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchParams] = useSearchParams();
  const rKeyword = searchParams.get('query');
  const [keyword, setKeyword] = React.useState(rKeyword ?? '');
  const [status, setStatus] = React.useState('idle');
  const [hasMore, setHasMore] = React.useState(false);
  const rSearchType = searchParams.get('type');
  const [searchType, setSearchType] = React.useState(rSearchType ?? 'title');

  const loadNextPage = () => {
    setPage(page + 1);
  };
  const LIMIT = 12;
  const MESSAGE = 'Sorry, not found. Try something else';

  const handleSubmit = async ({ keyword, searchType }) => {
    console.log('submit');
    setPage(1);
    setKeyword(keyword);
    setSearchType(searchType);
    setStatus('idle');
    setRecipes([]);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://determined-ruby-nematode.cyclic.app/recipes/search/${keyword}?page=${page}&limit=${LIMIT}&searchType=${searchType}`,
    })
      .then(function (data) {
        console.log(recipes, data.data);

        if (data.data.recepies.length === 0) {
          setStatus('rejected');
          console.log('error');
        } else {
          console.log(data.data.recepies);
          setRecipes(
            [...recipes, ...data.data.recepies].filter(
              (v, i, a) => a.findIndex(v2 => v2._id === v._id) === i
            )
          );
          setHasMore(data.data.nextPage);
          setStatus('resolved');
        }
      })
      .catch(function (error) {
        console.log('no data');
      });

    // eslint-disable-next-line
  }, [page, keyword, LIMIT, status]);

  return (
    <Container>
      <MainConteiner>
        <SearchForm
          handleSubmit={handleSubmit}
          query={keyword}
          type={searchType}
        />
        <SearchRecipesList key={recipes._id} recipes={recipes} />
        <Wrapper>
          {recipes.length !== 0 && hasMore && (
            <OtherButton type="button" onClick={loadNextPage}>
              Other categories
            </OtherButton>
          )}
          {status === 'rejected' && <EmptyPlaceholder text={MESSAGE} />}
        </Wrapper>
      </MainConteiner>
    </Container>
  );
};

export default SearchPage;
