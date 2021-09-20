import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledModal } from '../styled-components/QuestionsReport.style';
import QuestionReportList from './QuestionsReportList';

export default function QuestionsReport({ openModal: { openModal, setOpenModal } }) {
  const {
    playerData: { answers },
  } = useContext(GlobalContext);
  
  return (
    <StyledModal open={openModal} onClose={() => setOpenModal(false)}>
      <Box>
        <QuestionReportList answers={answers} />
      </Box>
    </StyledModal>
  );
}
