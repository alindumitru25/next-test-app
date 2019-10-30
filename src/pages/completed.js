import React from 'react';
import ConnectedApp from '../components/App';
import Nav from '../components/Nav';
import Todos from '../components/Todos';

const Completed = () => {
  return (
    <ConnectedApp>
      <Nav selectedFilter="completed" />
      <Todos selectedFilter="completed" />
    </ConnectedApp>
  );
};

export default Completed;
