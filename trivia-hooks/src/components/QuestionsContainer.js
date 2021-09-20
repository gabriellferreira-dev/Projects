import { Button } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Loader from '../components/Loader';
import { StyledQuestionsContainer } from '../styled-components/QuestionsContainer.style';
import Question from './Question';
import revealEffect from '../sound-effects/reveal.wav';
import useSound from 'use-sound';
import { useCallback } from 'react';

export default function QuestionsContainer() {
  const { questions } = useContext(GlobalContext);
  const [questionIndex, setQuestion] = useState(0);
  const [categoryRendered, setCategoryRendered] = useState(false);
  const [nextButtonShow, setNextButtonShow] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [revealPlay] = useSound(revealEffect, {
    volume: 0.2,
  });
  const answersRef = useRef(null);

  console.log('idioma', navigator.language);

  const renderCategory = useCallback(() => {
    setCategoryRendered(false);
    revealPlay();
    setTimeout(() => {
      setCategoryRendered(true);
    }, 2000);
  }, [revealPlay]);

  useEffect(() => {
    setTimeout(() => {
      renderCategory();
      setLoaded(true);
    }, 4000);
  }, [renderCategory]);

  return (
    <>
      {!isLoaded ? (
        <StyledQuestionsContainer>
          <Loader />
        </StyledQuestionsContainer>
      ) : (
        <>
          <StyledQuestionsContainer>
            {!categoryRendered ? (
              <p>{questions[questionIndex].category}</p>
            ) : (
              <>
                <Question
                  question={questions[questionIndex]}
                  answersRef={answersRef}
                  setNextButtonShow={setNextButtonShow}
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
              setNextButtonShow(false);
            }}
            style={{ display: nextButtonShow ? 'block' : 'none' }}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
}
