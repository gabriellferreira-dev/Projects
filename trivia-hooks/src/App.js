import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/game" exact component={ GamePage } />
      </Switch>
    </>
  );
}

export default App;
