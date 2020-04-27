import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './style';
import Tabs from '../../components/Tabs';

const Me = () => (
  <PageWrapper>
    Me Page. <Link to="/">to Book</Link>
    <Tabs />
  </PageWrapper>
);

export default Me;
