import { useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const initialPlayer = {
  name: '',
  quantity: '',
  rigthAnswers: [],
  wrongAnswers: [],
  scoreboard: { right: 0, wrong: 0 }
}

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [playerData, setPlayerData] = useState(initialPlayer);

  return (
    <GlobalContext.Provider
      value={{
        questions,
        setQuestions,
        quantity,
        setQuantity,
        playerData,
        setPlayerData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
