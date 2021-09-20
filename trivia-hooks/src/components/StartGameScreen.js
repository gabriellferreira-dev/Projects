import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { StartGame } from '../styled-components/StartGame.style';
import fetchQuestions from '../services/fetchQuestions';
import { GlobalContext } from '../context/GlobalContext';
import decode from '../services/decodeQuestions';
import { setCORS } from 'google-translate-api-browser';
import { translateQuestions } from '../services/translateQuestions';

setCORS('https://cors.bridged.cc/');

export default function StartGameScreen({ redirectNextScreen, setMounted }) {
  const { quantity, scoreboard, setQuestions, playerData } =
    useContext(GlobalContext);
  const [startedGame, setStartedGame] = useState(false);
  const [translate, setTranslate] = useState(false);

  const getQuestions = async () => {
    const questions = await fetchQuestions(
      `https://opentdb.com/api.php?amount=${Number(quantity)}&encode=url3986`
    );
    const decoded = decode(questions);

    if (translate) {
      const questionsTranslated = await translateQuestions(decoded);
      setQuestions(questionsTranslated);
      return;
    }
    setQuestions(decoded);
  };

  const createGameStorage = () => {
    const startedIn = new Date();
    const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
    const id = gameHistory ? gameHistory[gameHistory.length - 1].id : 1;

    if (gameHistory) {
      localStorage.setItem(
        'gameHistory',
        JSON.stringify([
          ...gameHistory,
          { ...playerData, scoreboard, startedIn, id: id + 1 },
        ])
      );
    } else {
      localStorage.setItem(
        'gameHistory',
        JSON.stringify([{ ...playerData, scoreboard, startedIn }])
      );
    }
  };

  const handleClick = () => {
    createGameStorage();
    getQuestions();
    setStartedGame(true);
  };

  useEffect(() => {
    setMounted(true);
    return () => {
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
          onClick={handleClick}
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
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={() => setTranslate(!translate)} />}
          label='Traduzir para português'
        />
      </FormGroup>
    </StartGame>
  );
}
