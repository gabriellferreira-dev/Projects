import { useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [playerData, setPlayer] = useState({
    name: '',
    quantity: ''
  });

  return (
    <GlobalContext.Provider
      value={{
        questions,
        setQuestions,
        quantity,
        setQuantity,
        playerData,
        setPlayer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
