import React from 'react';

const SearchForm = () => {
  return (
    <div className="search">
      <h1 className="search__title">FLIGHT SEARCH</h1>
      <form className="search__form" action="">
        <input className="search__form-input" type="text" />
        <i className="fas fa-search"></i>
        <button className="search__form-btn" type="submit">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
