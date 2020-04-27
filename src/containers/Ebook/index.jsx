import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { connect } from 'react-redux';

const Home = (props) => {
  const { history } = props;

  const book =
    '/books/Ding Tou Shi Nian Cai Wu Zi You - Yin Xing Luo Si Ding.epub';

  const onBack = useCallback(() => history.goBack(), [history]);

  return (
    <HomeWrapper>
      <Header back={onBack} />
      <Reader book={book} />
      <Menu />
    </HomeWrapper>
  );
};

export default connect(null, null)(withRouter(Home));
