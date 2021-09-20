import React from 'react';
import Header from '../components/Header';
import QuestionsContainer from '../components/QuestionsContainer';
import { GameSection } from '../styled-components/GameSection.style';

export default function GamePage() {
  return (
    <>
      <Header />
      <GameSection>
        <QuestionsContainer />
      </GameSection>
    </>
  );
}
