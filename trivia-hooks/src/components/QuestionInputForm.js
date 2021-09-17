import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { QuestionInputForm } from '../styled-components/QuestionInputForm.style';

export default function QuestionInput({ redirectNextScreen, setMounted }) {
  const { setQuantity, quantity } = useContext(GlobalContext);

  const handleChange = ({ target: { value } }) => {
    setQuantity(value);
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [setMounted]);

  return (
    <QuestionInputForm>
      <p>Selecione a quantidade de perguntas</p>
      <ToggleButtonGroup
        color='primary'
        value={quantity}
        exclusive
        onChange={handleChange}
        onClick={() => redirectNextScreen(true)}
      >
        <ToggleButton value='5'>5</ToggleButton>
        <ToggleButton value='10'>10</ToggleButton>
        <ToggleButton value='15'>15</ToggleButton>
      </ToggleButtonGroup>
    </QuestionInputForm>
  );
}
