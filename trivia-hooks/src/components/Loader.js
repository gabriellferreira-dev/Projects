import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Loader as StyledLoader } from '../styled-components/Loader.style';
import startGameEffect from '../sound-effects/start-game-countdown.wav';

export default function Loader() {
  const [timeLeft, setTimeLeft] = useState(3);
  const [play] = useSound(
    startGameEffect,
    { volume: 0.5 }
  );

  useEffect(() => {
    play();
  }, [play])
  
  useEffect(() => {
    if (timeLeft !== 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  return (
    <StyledLoader>
      <div>{timeLeft ? timeLeft : 'Go'}</div>
    </StyledLoader>
  );
}
