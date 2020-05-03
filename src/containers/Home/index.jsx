import React from 'react';
import Tabs from '../../components/Tabs';
import { HomeWrapper } from './style';

const Home = (props) => {
  return (
    <HomeWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        necessitatibus natus iusto beatae reiciendis adipisci sunt consectetur
        sequi aspernatur corrupti ex sed distinctio, doloribus deleniti ut nihil
        assumenda, voluptatibus minus?
      </p>
      <Tabs />
    </HomeWrapper>
  );
};

export default Home;
