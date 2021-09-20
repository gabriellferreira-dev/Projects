import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QuestionsContainer from '../components/QuestionsContainer';
import { GameSection } from '../styled-components/GameSection.style';
import { StartingAnimation } from '../styled-components/StartingAnimation.style';

export default function GamePage() {
  const [starting, setStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStarting(false);
    }, 5000);
  }, []);

  if (starting) {
    return (
      <StartingAnimation>
        <span>Aguarde... Buscando questões...</span>
      </StartingAnimation>
    );
  }

  return (
    <>
      <Header />
      <GameSection>
        <QuestionsContainer />
      </GameSection>
    </>
  );
}
