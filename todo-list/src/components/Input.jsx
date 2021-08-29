import React, { useContext, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { GlobalContext } from '../Context/TaskProvider';
import {
  StyledInput as Input,
  StyledButton as Button,
} from '../styledComponents/Input.style';

export default function InputComponent() {
  const { setTasks, tasks } = useContext(GlobalContext);
  const [task, setTask] = useState('');

  console.log(task);

  return (
    <div>
      <Input
        data-testid='input-task'
        placeholder='New task...'
        onChange={({ target: { value } }) => setTask(value)}
      />
      <Button
        data-testid='btn-new-task'
        icon
        onClick={() => setTasks([...tasks, task])}
      >
        <Icon name='add' />
      </Button>
    </div>
  );
}
