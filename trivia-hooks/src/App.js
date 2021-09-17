import React from 'react';
import HomePage from './pages/HomePage';

import { GlobalStyle } from './styles/globalStyle';
import './styles/transition.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
