import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchRecipesList from './SearchRecipesList';

const SearchPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [keyword, setKeyword] = React.useState('');

  const loadNextPage = () => {
    setPage(page + 1);
  };
  const LIMIT = 12;

  const handleSubmit = async keyword => {
    setPage(1);
    setKeyword(keyword);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://determined-ruby-nematode.cyclic.app/recipes/search/${keyword}?page=${page}&limit=${LIMIT}`,
    }).then(function (data) {
      console.log(data);
      setRecipes(
        [...recipes, ...data.data.recepies].filter(
          (v, i, a) => a.findIndex(v2 => v2._id === v._id) === i
        )
      );
    });
    // eslint-disable-next-line
  }, [page, keyword, LIMIT]);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      <SearchRecipesList key={recipes._id} recipes={recipes} />
      <button type="submit" onClick={loadNextPage}>
        Other categories
      </button>
    </div>
  );
};

export default SearchPage;
