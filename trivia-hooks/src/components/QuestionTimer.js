import React, { useRef } from 'react';
import { StyledQuestionTimer } from '../styled-components/QuestionTimer.styled';

export default function QuestionTimer({ isAnswered, timeLeft }) {

  const circleRef = useRef();
  const circle = circleRef.current;
  let radius;
  let circumference;

  if (circle && !isAnswered) {
    radius = circle.r.baseVal.value;
    circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  }


  return (
    <StyledQuestionTimer isAnswered={isAnswered} timeLeft={timeLeft}>
      <svg>
        <circle ref={circleRef} r='40%' cx='50%' cy='50%'></circle>
        <circle r='40%' cx='50%' cy='50%'></circle>
      </svg>
      <span>{timeLeft}</span>
    </StyledQuestionTimer>
  );
}
