import React from 'react';
import Tabs from '../../components/Tabs';
import { ShelfWrapper, ShelfContent, Books } from './style';
import Search from '../../components/Search';
import BookItem from '../../assets/book.jpg';

const Shelf = (props) => {
  return (
    <>
      <ShelfWrapper>
        <Search placeholder="搜索书架" tip="编辑" />
        <ShelfContent>
          <div className="tools">
            <div className="tool-item">
              <i className="icon icon-safari"></i>
              其他设备
            </div>
            <div className="tool-item">
              <i className="icon icon-safari"></i>
              分类显示
            </div>
          </div>
          <Books>
            <div className="row">
              <div className="book">
                <img src={BookItem} alt="" srcset="" />
                <div className="book-name">Go语言从入门到实战1</div>
              </div>
              <div className="book">
                <img src={BookItem} alt="" srcset="" />
                <div className="book-name">Go语言从入门到实战2</div>
              </div>
              <div className="book">
                <img src={BookItem} alt="" srcset="" />
                <div className="book-name">Go语言从入门到实战3</div>
              </div>
            </div>
          </Books>
        </ShelfContent>
      </ShelfWrapper>
      <Tabs />
    </>
  );
};

export default Shelf;
