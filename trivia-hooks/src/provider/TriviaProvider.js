import { useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [quantity, setQuantity] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ questions, setQuestions, quantity, setQuantity }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
