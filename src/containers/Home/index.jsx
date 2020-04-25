import React, { useState, useCallback } from 'react';
import Reader from '../../components/Reader';
import { HomeWrapper } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

const Home = () => {
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => setShow((state) => !state), []);

  return (
    <HomeWrapper>
      <Header show={show} />
      <Reader toggle={toggle} />
      <Menu show={show} />
    </HomeWrapper>
  );
};

export default Home;
