import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import QuestionTimer from './QuestionTimer';

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
  const [isAnswered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

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

  const setAnsweredCallback = useCallback(() => {
    Array.from(answersRef.current.children).forEach((element) => {
      element.classList.add('answered');
      element.setAttribute('disabled', true);
    });
    setNextButtonShow(true);
  }, [answersRef, setNextButtonShow]);

  useEffect(() => {
    if (timeLeft !== 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setAnsweredCallback();
    }
  }, [setAnsweredCallback, timeLeft]);

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
      setScore({
        ...scoreboard,
        right: scoreboard.right + 1,
        score: scoreboard.score + (timeLeft + 10),
      });
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
    setAnsweredCallback();
    setAnswered(true);
  };

  console.log(isAnswered);

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
      <QuestionTimer isAnswered={isAnswered} timeLeft={timeLeft} />
    </>
  );
}
