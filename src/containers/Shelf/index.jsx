import React from 'react';
import Tabs from "../../components/Tabs";
import { ShelfWrapper } from "./style";
import Search from "../../components/Search";

const Shelf = (props) => {
  return (
    <ShelfWrapper>
      <Search placeholder="搜索书架" tip="编辑" />
      <Tabs />
    </ShelfWrapper>
  );
};

export default Shelf;
