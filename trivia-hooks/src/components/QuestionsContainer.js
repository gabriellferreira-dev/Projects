import { Button } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledQuestionsContainer } from '../styled-components/QuestionsContainer.style';
import Question from './Question';

export default function QuestionsContainer() {
  const { questions } = useContext(GlobalContext);
  const [questionIndex, setQuestion] = useState(0);
  const [categoryRendered, setCategoryRendered] = useState(false);

  const answersRef = useRef(null);

  console.log('idioma', navigator.language);

  const renderCategory = () => {
    setCategoryRendered(false);
    setTimeout(() => {
      setCategoryRendered(true);
    }, 1000);
  };

  useEffect(() => {
    renderCategory();
  }, []);

  return (
    <>
      <StyledQuestionsContainer>
        {!categoryRendered ? (
          <p>{questions[questionIndex].category}</p>
        ) : (
          <>
            <Question
              question={questions[questionIndex]}
              answersRef={answersRef}
            />
          </>
        )}
      </StyledQuestionsContainer>
      <Button
        variant='contained'
        color='success'
        onClick={() => {
          setQuestion(questionIndex + 1);
          renderCategory();
        }}
      >
        Next
      </Button>
    </>
  );
}
