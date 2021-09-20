import React from 'react';
import { StyledCheckIcon, StyledCloseIcon } from '../styled-components/Icons.style';

export default function QuestionReportList({ answers }) {
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
    <ul>
      {answers.map(
        ({ correct_answer, incorrect_answers, question, answer }, i) => (
          <li key={i}>
            <p
              onClick={questionClick}
              className={answer === correct_answer ? 'correct' : 'incorrect'}
            >{`${i + 1} - ${question}`}</p>
            <div>
              {[correct_answer, ...incorrect_answers].map((item, j) => (
                <span
                  key={j}
                  style={{
                    fontWeight:
                      answer === item || item === correct_answer ? '600' : null,
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
  );
}
