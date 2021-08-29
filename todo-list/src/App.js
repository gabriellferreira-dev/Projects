import React, { useContext } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import ListTasks from './components/ListTasks';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Input />
      <ListTasks />
    </main>
  );
}

export default App;
