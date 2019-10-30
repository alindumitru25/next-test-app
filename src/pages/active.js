import React from 'react';
import ConnectedApp from '../components/App';
import Nav from '../components/Nav';
import Todos from '../components/Todos';

const Active = () => {
  return (
    <ConnectedApp>
      <Nav selectedFilter="active" />
      <Todos selectedFilter="active" />
    </ConnectedApp>
  );
};

export default Active;
