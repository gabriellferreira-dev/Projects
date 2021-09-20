import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledCheckIcon, StyledCloseIcon } from '../styled-components/Icons.style';
import { StyledModal } from '../styled-components/QuestionsReport.style';

export default function QuestionsReport({ openModal: { openModal, setOpenModal } }) {
  const {
    playerData: { answers },
  } = useContext(GlobalContext);

  const questionClick = ({ target }) => {
    if (target.nextSibling.classList.contains('open')) {
      target.nextSibling.classList.remove('open');
    } else {
      target.nextSibling.classList.add('open');
    }
  };

  const questionIcon = (playerAnswer, answer, correct) => {
    if (playerAnswer === correct && playerAnswer === answer) {
      return <StyledCheckIcon />;
    }
    if (playerAnswer !== correct && answer === correct) {
      return <StyledCheckIcon />;
    }
    if (playerAnswer === answer) {
      return <StyledCloseIcon />;
    }
  };
  
  return (
    <StyledModal open={openModal} onClose={() => setOpenModal(false)}>
      <Box>
        <ul>
          {answers.map(
            ({ correct_answer, incorrect_answers, question, answer }, i) => (
              <li key={i}>
                <p
                  onClick={questionClick}
                  className={
                    answer === correct_answer ? 'correct' : 'incorrect'
                  }
                >{`${i + 1} - ${question}`}</p>
                <div>
                  {[correct_answer, ...incorrect_answers].map((item, j) => (
                    <span
                      key={j}
                      style={{
                        fontWeight:
                          answer === item || item === correct_answer
                            ? '600'
                            : null,
                      }}
                    >
                      {item}
                      {questionIcon(answer, item, correct_answer)}
                    </span>
                  ))}
                </div>
              </li>
            )
          )}
        </ul>
      </Box>
    </StyledModal>
  );
}
