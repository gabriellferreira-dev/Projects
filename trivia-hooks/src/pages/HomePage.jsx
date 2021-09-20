import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import StyledHomePage from '../styled-pages/HomePage.style';
import PlayerForm from '../components/PlayerForm';
import StartGameScreen from '../components/StartGameScreen';
import { GlobalContext } from '../context/GlobalContext';
import HistoryIcon from '@mui/icons-material/History';
import IconButton from '@mui/material/IconButton';
import HistoryGame from '../components/HistoryGame';

const StyledHistoryIcon = styled(HistoryIcon)`
  color: #f3f3f3;
  font-size: 3rem !important;
`;

export default function HomePage() {
  const { playerData, quantity } = useContext(GlobalContext);
  const [nextScreen, setNextScreen] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const redirectNextScreen = (isNext) => {
    if (playerData.name && quantity) {
      setNextActive(true);
      setMounted(false);
      setTimeout(() => {
        setNextActive(false);
        setNextScreen(isNext);
      }, 1000);
    }
  };

  useEffect(() => {
    redirectNextScreen(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerData.name, quantity]);

  useEffect(() => {
    const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));

    if (gameHistory) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, []);

  return (
    <StyledHomePage open={open} nextActive={nextActive} mounted={mounted}>
      <div>
        <div>
          <div>Clique aqui para ver jogos anteriores</div>
        </div>
        <IconButton onClick={() => setOpenModal(true)}>
          <StyledHistoryIcon />
        </IconButton>
      </div>
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
      <HistoryGame openModal={{ openModal, setOpenModal }} />
    </StyledHomePage>
  );
}
