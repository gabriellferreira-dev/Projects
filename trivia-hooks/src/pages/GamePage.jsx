import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loader from '../components/Loader';
import QuestionsContainer from '../components/QuestionsContainer';
import {StyledSection} from '../styled-components/StyledSection.style';

export default function GamePage() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <Header />
          <StyledSection >
            <QuestionsContainer />
          </StyledSection>
        </>
      )}
    </>
  );
}
