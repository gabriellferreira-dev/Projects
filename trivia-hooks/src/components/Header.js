import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledHeader } from '../styled-components/Header.style';

export default function Header() {
  const { playerData: { name } } = useContext(GlobalContext);
  return (
    <StyledHeader>
      <p>{`PLAYER: ${name.toUpperCase()}`}</p>
      <div>
        <p>ACERTOS<span>0</span></p>
        <p>PONTUAÇÃO<span>0</span></p>
        <p>ERROS<span>0</span></p>
      </div>
    </StyledHeader>
  )
}