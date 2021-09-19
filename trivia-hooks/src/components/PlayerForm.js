import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { PlayerForm } from '../styled-components/PlayerForm.style';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e3001a',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#f3f3f3',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#f3f3f3',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e3001aa5',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e3001a',
    },
    '& .MuiOutlinedInput-input': {
      color: '#f3f3f3',
    },
    '& .MuiInputLabel-outlined': {
      color: '#f3f3f3',
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'red',
    },
  },
});

export default function QuestionInput({ redirectNextScreen, setMounted }) {
  const { playerData, setPlayerData } = useContext(GlobalContext);
  const classes = useStyles();

  const handleChange = ({ target: { value, name } }) => {
    setPlayerData({ ...playerData, [name]: value });
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [setMounted]);

  return (
    <PlayerForm>
      <p>Informe seu nome</p>
      <TextField
        id='outlined-basic'
        label='Name'
        name='name'
        value={playerData.name}
        variant='outlined'
        className={classes.root}
        onChange={handleChange}
        autoFocus={ true }
        onBlur={() => redirectNextScreen(true)}
      />
      <p>Selecione a quantidade de perguntas</p>
      <ToggleButtonGroup
        color='primary'
        value={playerData.quantity}
        exclusive
        onChange={handleChange}
        onClick={() => redirectNextScreen(true)}
      >
        <ToggleButton name='quantity' value='5'>
          5
        </ToggleButton>
        <ToggleButton name='quantity' value='10'>
          10
        </ToggleButton>
        <ToggleButton name='quantity' value='15'>
          15
        </ToggleButton>
      </ToggleButtonGroup>
    </PlayerForm>
  );
}
