import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './style';

const Me = () => (
  <PageWrapper>
    Me Page. <Link to="/">to Book</Link>
  </PageWrapper>
);

export default Me;
