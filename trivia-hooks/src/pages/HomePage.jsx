import React, { useContext, useState } from 'react';
import StyledHomePage from '../styled-pages/HomePage.style';
import PlayerForm from '../components/PlayerForm';
import StartGameScreen from '../components/StartGameScreen';
import { GlobalContext } from '../context/GlobalContext';

export default function HomePage() {
  const { playerData } = useContext(GlobalContext);
  const [nextScreen, setNextScreen] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  

  const redirectNextScreen = (isNext) => {
    if (playerData.name) {
      setNextActive(true);
      setMounted(false);
      setTimeout(() => {
        setNextActive(false);
        setNextScreen(isNext);
      }, 1000);
    }
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