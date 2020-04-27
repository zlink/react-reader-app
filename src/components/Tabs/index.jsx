import React from 'react';
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
          <span className="icon icon-person"></span>
          发现
        </div>
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
