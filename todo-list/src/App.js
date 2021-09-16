import React from 'react';
import Header from './components/Header';
import ListTasksToDo from './components/ListTasksToDo';
import { MainContainer } from './styledComponents/Main.style';
import { GlobalStyle } from './styles/globalStyle';
import ListTasksCompleted from './components/ListTasksCompleted';

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <div className="lists">
        <ListTasksToDo />
        <ListTasksCompleted />
      </div>
    </MainContainer>
  );
}

export default App;
