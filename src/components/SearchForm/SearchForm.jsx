import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        onChange={handleInput}
        type="text"
        autoComplete="off"
        value={query}
        id="outlined-basic"
        label="Search films"
        variant="outlined"
        size="small"
      />
      <button className={css.buttonSubmit} variant="contained" type="submit">
        Search
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
