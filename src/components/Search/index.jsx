import React from 'react';
import { SearchWrapper } from "./style";

const Search = (props) => {
  const { placeholder, tip } = props;
  return (
    <SearchWrapper>
      <div className="search">
        <div className="search-icon">
          <i className="icon icon-search" />
        </div>
        <input type="text" placeholder={placeholder}/>
        <div className="search-text">
          {tip}
        </div>
      </div>
    </SearchWrapper>
  )
};

export default Search;
