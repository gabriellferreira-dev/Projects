import { Button } from '@mui/material';
import React, { useEffect } from 'react';

export default function Question({
  question: { incorrect_answers, correct_answer, category, question },
  answersRef,
}) {
  const answersList = [...incorrect_answers, correct_answer];
  const shuffledAnswers = answersList.sort(() => Math.random() - 0.5);

  useEffect(() => {
    Array.from(answersRef.current.children).forEach((answer) => {
      answer.removeAttribute('disabled');
      if (answer.classList.contains('answered')) {
        answer.classList.remove('answered');
      }
    });
  }, [answersRef, question]);

  const handleClick = ({ target }) => {
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
