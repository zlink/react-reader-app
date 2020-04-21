import React from 'react';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Home = () => (
  <HomeWrapper>
    <Header />
    <Reader />
    <Menu />
  </HomeWrapper>
);

export default Home;
