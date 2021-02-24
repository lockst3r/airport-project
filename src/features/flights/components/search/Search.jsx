import React, {useState} from 'react';

const SearchForm = ({setFilterText}) => {
  const [filterText, settFilterText] = useState("");
  return (
    <div className="search">
      <h1 className="search__title">FLIGHT SEARCH</h1>
      <form className="search__form" action="">
        <input className="search__form-input" type="text"  value={filterText} onChange={(e) => settFilterText(e.target.value)}/>
        <i className="fas fa-search"></i>
        <button className="search__form-btn" type="submit" onClick={() => setFilterText(filterText)}>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
