import { useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const initialPlayer = {
  name: '',
  quantity: '',
  answers: [],
};

const initialScore = { right: 0, wrong: 0, score: 0 };

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [playerData, setPlayerData] = useState(initialPlayer);
  const [scoreboard, setScore] = useState(initialScore);

  useEffect(() => {
    const storagePlayer = JSON.parse(localStorage.getItem('player'));
    if (storagePlayer) {
      localStorage.setItem(
        'player',
        JSON.stringify({ ...storagePlayer, ...playerData, scoreboard })
      );
    } else {
      localStorage.setItem('player', JSON.stringify({...playerData, scoreboard}));
    }
  }, [playerData, scoreboard]);

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
