import React from 'react';
import { SearchWrapper } from './style';

const Search = (props) => {
  const { placeholder, tip } = props;
  return (
    <SearchWrapper>
      <div className="search">
        <div className="search-icon">
          <i className="icon icon-search" />
        </div>
        <input type="text" placeholder={placeholder} />
        <span className="search-text">{tip}</span>
      </div>
    </SearchWrapper>
  );
};

export default Search;
