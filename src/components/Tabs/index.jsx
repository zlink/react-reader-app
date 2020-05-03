import React from 'react';
import { Link } from 'react-router-dom';
import { TabsWrapper, TabItem } from './style';

const Tabs = (props) => {
  return (
    <TabsWrapper>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-person"></span>
          发现
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-person"></span>
          发现
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-person"></span>
          发现
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <Link to="/ebook">
            <span className="icon icon-person"></span>
            Ebook
          </Link>
        </div>
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
