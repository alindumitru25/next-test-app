import React from 'react';
import TabStrip from '../components/TabPanel/TabStrip';
import ConnectedApp from '../components/App';
import Nav from '../components/Nav';
import Todos from '../components/Todos';

const Home = () => {
  return (
    <ConnectedApp>
      <Nav selectedFilter="all" />
      <Todos  selectedFilter="all" />
    </ConnectedApp>
  );
};

export default Home;
