import { useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const initialPlayer = {
  id: 0,
  name: '',
  answers: [],
};

const initialScore = { right: 0, wrong: 0, score: 0 };

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [playerData, setPlayerData] = useState(initialPlayer);
  const [scoreboard, setScore] = useState(initialScore);
  const [isNewGame, setNewGame] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (isNewGame) {
      setPlayerData(initialPlayer);
      setScore(initialScore);
      setNewGame(false);
    }
  }, [isNewGame]);

  return (
    <GlobalContext.Provider
      value={{
        questions,
        setQuestions,
        playerData,
        setPlayerData,
        quantity,
        setQuantity,
        scoreboard,
        setScore,
        setNewGame,
        isNewGame,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
