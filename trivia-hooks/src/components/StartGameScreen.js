import React from 'react';
import { Button } from '@mui/material';
import { StartGame } from '../styled-components/StartGame.style';
import fetchQuestions from '../services/fetchQuestions';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import { useEffect } from 'react';

export default function StartGameScreen({ redirectNextScreen, setMounted }) {
  const { quantity, setQuestions } = useContext(GlobalContext);

  const getQuestions = async () => {
    const questions = await fetchQuestions(
      `https://opentdb.com/api.php?amount=${quantity}`
    );
    setQuestions(questions);
  };

  useEffect(() => {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, [setMounted]);

  return (
    <StartGame>
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
    </StartGame>
  );
}
