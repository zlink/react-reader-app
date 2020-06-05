import React from 'react';
import Tabs from "../../components/Tabs";
import { ShelfWrapper, ShelfContainer } from "./style";

const Shelf = (props) => {
  return (
    <ShelfWrapper>
      <ShelfContainer>
        <div className="search">
          <div className="search-icon">
            <i className="icon icon-search" />
          </div>
          <input type="text" placeholder="搜索书架"/>
          <div className="search-text">
            编辑
          </div>
        </div>
      </ShelfContainer>
      <Tabs />
    </ShelfWrapper>
  );
};

export default Shelf;
