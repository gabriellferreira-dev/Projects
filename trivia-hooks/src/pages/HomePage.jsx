import React, { useState } from 'react';
import StyledHomePage from '../styled-pages/HomePage.style';
import PlayerForm from '../components/PlayerForm';
import StartGameScreen from '../components/StartGameScreen';

export default function HomePage() {
  const [nextScreen, setNextScreen] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  const redirectNextScreen = (isNext) => {
    setNextActive(true);
      setMounted(false);
      setTimeout(() => {
      setNextActive(false);
      setNextScreen(isNext);
    }, 1000);
  };

  return (
    <StyledHomePage nextActive={nextActive} mounted={mounted}>
      <form>
        {nextScreen ? (
          <StartGameScreen
            setMounted={setMounted}
            redirectNextScreen={redirectNextScreen}
          />
        ) : (
          <PlayerForm
            setMounted={setMounted}
            redirectNextScreen={redirectNextScreen}
          />
        )}
      </form>
    </StyledHomePage>
  );
}
