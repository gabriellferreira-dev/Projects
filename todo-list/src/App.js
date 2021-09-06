import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import ListTasks from './components/ListTasks';
import { MainContainer } from './styledComponents/Main.style';
import { GlobalStyle } from './styles/globalStyle';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <Input />
      <StatusBar />
      <ListTasks />
    </MainContainer>
  );
}

export default App;
