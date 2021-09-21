import { Box } from '@mui/material';
import React from 'react';
import { StyledModal } from '../styled-components/QuestionsReport.style';
import QuestionReportList from './QuestionsReportList';
import PersonIcon from '@mui/icons-material/Person';
import { PlayerContainer } from '../styled-components/PlayerContainer.style';

export default function HistoryGame({
  openModal: { openModal, setOpenModal },
  history,
}) {

  const toglePlayer = ({ target }) => {
    console.log(target)
    if (target.nextSibling.classList.contains('open')) {
      target.nextSibling.classList.remove('open');
    } else {
      target.nextSibling.classList.add('open');
    }
  };

  return (
    <StyledModal open={openModal} onClose={() => setOpenModal(false)}>
      <Box>
        {history.map(({ answers, name, startedIn }, i) => {
          const date = new Date(startedIn);

          return (
            <PlayerContainer key={i}>
              <div onClick={toglePlayer}>
                <span>
                  <PersonIcon />
                  {name}
                </span>
                <span>
                  {`Jogou em 
                  ${date.toLocaleDateString('pt-BR')}`}
                </span>
              </div>
              <div>
                <QuestionReportList answers={answers} />
              </div>
            </PlayerContainer>
          );
        })}
      </Box>
    </StyledModal>
  );
}
