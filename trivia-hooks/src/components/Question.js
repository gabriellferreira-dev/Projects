import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Question({
  question: { incorrect_answers, correct_answer, category, question },
  answersRef,
}) {
  const {
    setPlayerData,
    playerData,
    playerData: {
      scoreboard,
      scoreboard: { right, wrong },
    },
  } = useContext(GlobalContext);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const answersList = [...incorrect_answers, correct_answer];
    setShuffledAnswers(answersList.sort(() => Math.random() - 0.5));
    Array.from(answersRef.current.children).forEach((answer) => {
      answer.removeAttribute('disabled');
      if (answer.classList.contains('answered')) {
        answer.classList.remove('answered');
      }
    });
  }, [answersRef, correct_answer, incorrect_answers, question]);

  const addAnswer = (answer) => {
    console.log(answer);
    if (answer === correct_answer) {
      setPlayerData({
        ...playerData,
        rigthAnswers: [...playerData.rigthAnswers, answer],
        scoreboard: { ...scoreboard, right: right + 1 },
      });
    } else {
      setPlayerData({
        ...playerData,
        wrongAnswers: [...playerData.wrongAnswers, answer],
        scoreboard: { ...scoreboard, wrong: wrong + 1 },
      });
    }
  };

  const handleClick = ({ target, target: { value } }) => {
    addAnswer(value);
    const answersButton = target.parentNode.children;
    Array.from(answersButton).forEach((element) => {
      element.classList.add('answered');
      element.setAttribute('disabled', true);
    });
  };

  return (
    <>
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
            // disabled={isAnswered}
          >
            {answer}
          </Button>
        ))}
      </div>
    </>
  );
}
