import React from 'react';
import { TabsWrapper, TabItem } from './style';

const Tabs = (props) => {
  return (
    <TabsWrapper>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-safari" />
          发现
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-shelf" />
          书架
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-search" />
          看一看
        </div>
      </TabItem>
      <TabItem>
        <div className="icon-wrapper">
          <span className="icon icon-person" />
          我
        </div>
      </TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
