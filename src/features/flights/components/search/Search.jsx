import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const SearchForm = ({ setFilterText }) => {
  const [filterText, settFilterText] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (filterText) {
      history.push(`${location.pathname}/${filterText}`);
    }
  }, []);

  return (
    <div className="search">
      <h1 className="search__title">FLIGHT SEARCH</h1>
      <Link
        style={{ textDecoration: 'none' }}
        to={`${history.location.pathname}?search=${filterText}`}
      >
        <form className="search__form" action="">
          <input
            className="search__form-input"
            type="text"
            value={filterText}
            onChange={e => settFilterText(e.target.value)}
            placeholder="Airline, destination or flight #"
          />
          <i className="fas fa-search"></i>
          <button
            className="search__form-btn"
            type="submit"
            onClick={() => setFilterText(filterText)}
          >
            search
          </button>
        </form>
      </Link>
    </div>
  );
};

export default SearchForm;
