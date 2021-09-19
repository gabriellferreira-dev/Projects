import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Question({
  question: questionData,
  question: { incorrect_answers, correct_answer, category, question },
  answersRef,
  setNextButtonShow,
}) {
  const {
    setPlayerData,
    playerData,
    playerData: { answers },
    questions,
    scoreboard,
    setScore,
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
    setPlayerData({
      ...playerData,
      answers: [
        ...answers,
        {
          question,
          incorrect_answers,
          correct_answer,
          answer,
        },
      ],
    });
  };

  const updateScore = (answer) => {
    if (answer === correct_answer) {
      setScore({ ...scoreboard, right: scoreboard.right + 1 });
    } else {
      setScore({ ...scoreboard, wrong: scoreboard.wrong + 1 });
    }
  };

  const handleClick = ({ target, target: { value } }) => {
    if (questions[questions.length - 1] !== questionData) {
      setNextButtonShow(true);
    }
    addAnswer(value);
    updateScore(value);
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
          >
            {answer}
          </Button>
        ))}
      </div>
    </>
  );
}
