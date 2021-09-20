import { useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const initialPlayer = {
  id: 0,
  name: '',
  quantity: '',
  answers: [],
};

const initialScore = { right: 0, wrong: 0, score: 0 };

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [playerData, setPlayerData] = useState(initialPlayer);
  const [scoreboard, setScore] = useState(initialScore);

  return (
    <GlobalContext.Provider
      value={{
        questions,
        setQuestions,
        playerData,
        setPlayerData,
        scoreboard,
        setScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
