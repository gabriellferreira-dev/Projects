import React, { useState, useEffect } from 'react';
import { Loader as StyledLoader } from '../styled-components/Loader.style';

export default function Loader() {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (!timeLeft) return;
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <StyledLoader>
      <div>{timeLeft ? timeLeft : 'Go'}</div>
    </StyledLoader>
  );
}
