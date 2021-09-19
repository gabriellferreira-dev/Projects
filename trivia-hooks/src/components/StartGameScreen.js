import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import { StartGame } from '../styled-components/StartGame.style';
import fetchQuestions from '../services/fetchQuestions';
import { GlobalContext } from '../context/GlobalContext';
import decode from '../services/decodeQuestions';

export default function StartGameScreen({ redirectNextScreen, setMounted }) {
  const {
    playerData: { quantity },
    setQuestions,
    playerData,
    setPlayerData,
  } = useContext(GlobalContext);
  const [startedGame, setStartedGame] = useState(false);

  const getQuestions = async () => {
    setStartedGame(true);
    const questions = await fetchQuestions(
      `https://opentdb.com/api.php?amount=${Number(quantity)}&encode=url3986`
    );
    const decoded = decode(questions);
    setQuestions(decoded);
    return decoded;
  };

  useEffect(() => {
    console.log(playerData);
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, [playerData, setMounted]);

  if (startedGame) {
    return <Redirect to='/game' />;
  }

  return (
    <StartGame>
      <p>{`Olá, ${playerData.name}. Vamos começar?`}</p>
      <div>
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={getQuestions}
        >
          Start
        </Button>
        <Button
          variant='outlined'
          color='error'
          size='large'
          onClick={() => redirectNextScreen(false)}
        >
          Cancel
        </Button>
      </div>
    </StartGame>
  );
}
