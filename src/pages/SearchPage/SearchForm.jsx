import * as React from 'react';

const SearchForm = props => {
  const [value, setValue] = React.useState('');
  const [keyword, setKeyword] = React.useState('');

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  const handleInputChange = event => {
    event.preventDefault();
    setKeyword(event.currentTarget.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('submit');
    props.handleSubmit(keyword);
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={keyword}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
         example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <button type="submit">Search</button>
      </form>
      <div>
        <label>
          Search by:
          <select value={value} onChange={handleValueChange}>
            <option value="title">Title</option>
            <option value="ingridient">Ingridient</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchForm;
