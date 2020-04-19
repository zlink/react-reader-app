import React from 'react';
import Menu from '../../components/Menu';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';

const Home = () => (
  <>
    <HomeWrapper>
      <Reader />
    </HomeWrapper>
    <Menu />
  </>
);

export default Home;
