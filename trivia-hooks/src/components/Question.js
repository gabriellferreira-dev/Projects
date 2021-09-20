import { Button } from '@mui/material';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import QuestionTimer from './QuestionTimer';
import useSound from 'use-sound';
import gamerOverEffect from '../sound-effects/game-over.wav';
import timerEffect from '../sound-effects/timer.wav';
import correctAnswerEffect from '../sound-effects/correct-answer.wav';
import wrongAnswerEffect from '../sound-effects/wrong-answer.wav';

export default function Question({
  question: questionData,
  question: { incorrect_answers, correct_answer, category, question },
  answersRef,
  setNextButtonShow,
}) {
  const { setPlayerData, playerData, questions, scoreboard, setScore } =
    useContext(GlobalContext);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [isAnswered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [endGame, setEndGame] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [gameOverPlay] = useSound(gamerOverEffect, { volume: 0.5 });
  const [wrongAnswerPlay] = useSound(wrongAnswerEffect, { volume: 0.5 });
  const [correctAnswerPlay] = useSound(correctAnswerEffect, { volume: 0.5 });
  const [timerPlay, { stop: stopTimerEffect }] = useSound(timerEffect, {
    volume: 0.2,
  });

  const { answers } = playerData;

  // Update current player in storage
  useEffect(() => {
    console.log('aqyu');
    const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
    let player;

    if (gameHistory) {
      player = gameHistory[gameHistory.length - 1];
      const playerIndex = gameHistory.findIndex((item) => item === player);
      player = { ...player, answers, scoreboard };
      gameHistory[playerIndex] = player;

      localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    }
  }, [answers, scoreboard]);

  useEffect(() => {
    const answersList = [...incorrect_answers, correct_answer];
    setShuffledAnswers(answersList.sort(() => Math.random() - 0.5));
    Array.from(answersRef.current.children).forEach((answer) => {
      answer.removeAttribute('disabled');
      if (answer.classList.contains('answered')) {
        answer.classList.remove('answered');
      }
    });
  }, [answersRef, correct_answer, incorrect_answers]);

  const setAnsweredCallback = useCallback(() => {
    Array.from(answersRef.current.children).forEach((element) => {
      element.classList.add('answered');
      element.setAttribute('disabled', true);
    });
    setAnswered(true);
  }, [answersRef]);

  const addAnswer = useCallback((answer = '') => {
    setPlayerData({
      ...playerData,
      answers: [
        ...playerData.answers,
        {
          question,
          incorrect_answers,
          correct_answer,
          answer,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeLeft !== 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setAnsweredCallback();
      setNextButtonShow(true);
      addAnswer();
      wrongAnswerPlay();
      setScore({ ...scoreboard, wrong: scoreboard.wrong + 1 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    addAnswer,
    setAnsweredCallback,
    setNextButtonShow,
    timeLeft,
    wrongAnswerPlay,
  ]);

  useEffect(() => {
    if (questions[questions.length - 1] === questionData && isAnswered) {
      setTimeout(() => {
        setEndGame(true);
        gameOverPlay();
      }, 3000);
      setTimeout(() => {
        setRedirect(true);
      }, 6000);
    }
    if (isAnswered) {
      stopTimerEffect();
    } else {
      timerPlay();
    }
  }, [
    gameOverPlay,
    isAnswered,
    questionData,
    questions,
    stopTimerEffect,
    timerPlay,
  ]);

  const updateScore = (answer) => {
    if (answer === correct_answer) {
      setScore({
        ...scoreboard,
        right: scoreboard.right + 1,
        score: scoreboard.score + (timeLeft + 10),
      });
    } else {
      setScore({ ...scoreboard, wrong: scoreboard.wrong + 1 });
    }
  };

  const handleClick = ({ target: { value } }) => {
    if (questions[questions.length - 1] !== questionData) {
      setNextButtonShow(true);
    }
    if (value === correct_answer) {
      correctAnswerPlay();
    } else {
      wrongAnswerPlay();
    }

    addAnswer(value);
    updateScore(value);
    setAnsweredCallback();
    setAnswered(true);
  };

  if (redirect) return <Redirect to='/feedback' />;

  return (
    <>
      {endGame && <div>FIM DE JOGO!</div>}
      <span>{category}</span>
      <p>{question}</p>
      <div ref={answersRef}>
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            value={answer}
            className={answer === correct_answer ? 'correct' : 'incorrect'}
            variant='outlined'
            onClick={handleClick}
          >
            {answer}
          </Button>
        ))}
      </div>
      <QuestionTimer isAnswered={isAnswered} timeLeft={timeLeft} />
    </>
  );
}
