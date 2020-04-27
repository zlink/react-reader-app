import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Home = (props) => {
  const book =
    '/books/Ding Tou Shi Nian Cai Wu Zi You - Yin Xing Luo Si Ding.epub';

  const onBack = useCallback(() => window.history.back(), []);

  return (
    <HomeWrapper>
      <Header back={onBack} />
      <Reader book={book} />
      <Menu />
    </HomeWrapper>
  );
};

export default withRouter(Home);
