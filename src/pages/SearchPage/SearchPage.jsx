import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import SearchForm, { Button } from './SearchForm';
import SearchRecipesList from './SearchRecipesList';
import ErrorSearch from './ErrorSearch';
import { Container } from 'components/Container/Container';
// test
import styled from 'styled-components';
import bg from '../../images/bg/bg_big_desktop_1x.png';
import { EmptyPlaceholder } from 'pages/EmptyPlaceholder/EmptyPlaceholder';
import { EmptyTitle } from 'pages/EmptyPlaceholder/EmptyPlaceholder.styled';
import { MainConteiner } from 'components/Container/Container.styled';

const SearchPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [keyword, setKeyword] = React.useState('');
  const [status, setStatus] = React.useState('idle');
  const [hasMore, setHasMore] = React.useState(false);
  const [searchType, setSearchType] = React.useState('title');

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

  console.log(status);

  return (
    <Container>
      <MainConteiner>
        <SearchForm handleSubmit={handleSubmit} />
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

// TEST
export const OtherButton = styled.button`
  border-radius: 18px 44px;
  color: ${p => p.theme.colors.mainBtnText};
  background-color: ${p => p.theme.colors.searchSelectBg};
  border: ${p => p.theme.borders.btnHover};
  cursor: pointer;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 20px 52px;
  min-width: 61px;

  @media screen and (min-width: 768px) {
    padding: 16px 42px;
    min-width: 130px;
    margin-top: 50px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: 23px 52px;
    min-width: 160px;
    margin-bottom: 118px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
