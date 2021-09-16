import React, { useContext, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../Context/TaskProvider';
import { Button } from '../styledComponents/ButtonAdd.style';
import { StyledInput as Input } from '../styledComponents/Input.style';
import { InputContainer } from '../styledComponents/InputContainer.style';

export default function InputComponent() {
  const { setTasks, tasks } = useContext(GlobalContext);
  const [task, setTask] = useState({});
  const inputRef = useRef();

  const insertNewTask = ({ type, code }) => {
    if (type === 'click' || code === 'Enter') {
      if (task.content) {
        setTasks(tasks.length ? [...tasks, task] : [task]);
        inputRef.current.value = '';
        updateStorage();
      }
    }
    setTask({});
  };

  const updateStorage = () => {
    const tasksStorage = localStorage.getItem('tasks');
    if (!tasksStorage) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
    if (!tasks.length) {
      localStorage.setItem('tasks', JSON.stringify([task]));
    }
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  };

  const createTask = ({ target: { value } }) => {
    const lastTask = tasks[tasks.length - 1];
    setTask({
      id: lastTask ? lastTask.id + 1 : 0,
      content: value,
    });
  };

  return (
    <InputContainer>
      <Input
        data-testid='input-task'
        placeholder='New task...'
        onChange={createTask}
        onKeyDown={insertNewTask}
        ref={inputRef}
      />
      <Button data-testid='btn-new-task' onClick={insertNewTask}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputContainer>
  );
}
