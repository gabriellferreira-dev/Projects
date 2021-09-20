import React, { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { StyledFeedback } from '../styled-pages/Feedback.style';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from '@mui/material';
import drumsAppearEffect from '../sound-effects/drums-appear.wav';
import QuestionsReport from '../components/QuestionsReportModal';

const StyledButton = styled(Button)`
  font-size: 1.6rem !important;
  background-color: rgba(0, 128, 0, 0.5) !important;

  &:hover {
    background-color: rgba(0, 128, 0, 0.7) !important;
  }
`;

export default function Feedback() {
  const {
    scoreboard: { right, wrong },
    playerData: { quantity },
  } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [playDrumsEffect] = useSound(drumsAppearEffect, { volume: 1 });

  const feedbackMessage = () => {
    if (right === quantity) {
      return <span>Very good!</span>;
    }
    if (right >= 1) {
      return <span>Good!</span>;
    }
    return <span>What a pity! Good luck next time.</span>;
  };

  useEffect(() => {
    playDrumsEffect();
  }, [playDrumsEffect])

  return (
    <StyledFeedback>
      <div>
        <p>RESUMO</p>
        <div>
          <span>
            <CheckIcon />
            {right}
          </span>
          <span>
            <CloseIcon />
            {wrong}
          </span>
        </div>
        {feedbackMessage()}
      </div>
      <StyledButton variant='contained' onClick={() => setOpenModal(true)}>
        Ver respostas
      </StyledButton>
      <QuestionsReport openModal={{openModal, setOpenModal}}/>
    </StyledFeedback>
  );
}
