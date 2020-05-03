import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from './style';
import Tabs from '../../components/Tabs';

const Me = () => {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`You clicked on: ${count}`);
    }, 3000);
  }
  return (
    <PageWrapper>
      Me Page. <Link to="/">to Book</Link>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
      <Tabs />
    </PageWrapper>
  );
};

export default Me;
