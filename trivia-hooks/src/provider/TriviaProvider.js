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
    console.log(playerData);
    const storagePlayer = JSON.parse(localStorage.getItem('player'));
    if (storagePlayer) {
      localStorage.setItem(
        'player',
        JSON.stringify({ ...storagePlayer, ...playerData })
      );
    } else {
      localStorage.setItem('player', JSON.stringify(playerData));
    }
  }, [playerData]);

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
