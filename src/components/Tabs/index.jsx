import React from 'react';
import { TabsWrapper, TabItem } from './style';

const Tabs = (props) => {
  return (
    <TabsWrapper>
      <TabItem>发现</TabItem>
      <TabItem>书架</TabItem>
      <TabItem>看一看</TabItem>
      <TabItem>我</TabItem>
    </TabsWrapper>
  );
};

export default Tabs;
