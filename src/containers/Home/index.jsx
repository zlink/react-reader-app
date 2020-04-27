import React from 'react';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Home = () => {
  const book =
    '/books/Ding Tou Shi Nian Cai Wu Zi You - Yin Xing Luo Si Ding.epub';

  return (
    <HomeWrapper>
      <Header />
      <Reader book={book} />
      <Menu />
    </HomeWrapper>
  );
};

export default Home;
