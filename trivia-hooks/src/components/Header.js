import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledHeader } from '../styled-components/Header.style';

export default function Header() {
  const {
    playerData: {
      name,
      scoreboard: { right, wrong },
    },
  } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <p>{`PLAYER: ${name.toUpperCase()}`}</p>
      <div>
        <p>
          ACERTOS<span>{right}</span>
        </p>
        <p>
          PONTUAÇÃO<span>0</span>
        </p>
        <p>
          ERROS<span>{wrong}</span>
        </p>
      </div>
    </StyledHeader>
  );
}
