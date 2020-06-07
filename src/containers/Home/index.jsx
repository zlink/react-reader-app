import React from 'react';
import Tabs from '../../components/Tabs';
import Search from '../../components/Search';
import { HomeWrapper } from './style';

const Home = (props) => {
  return (
    <HomeWrapper>
      <Search />
      <Tabs />
    </HomeWrapper>
  );
};

export default Home;
