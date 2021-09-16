import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/TaskProvider';
import ListItemContainer from './ListItemContainer';

import { Dropdown } from '../styledComponents/Dropdown.style';

export default function ListTasks() {
  const { tasks } = useContext(GlobalContext);
  const [isActive, setActive] = useState(true);

  const buttonStyle = {
    bgColor: 'rgb(21, 155, 128)',
  };

  return (
    <Dropdown
      active={isActive}
      haveTask={!!tasks.length}
      initialActive
      buttonStyle={buttonStyle}
    >
      <button onClick={() => setActive(!isActive)}>
        <span>A FAZER</span>
        <div>{tasks.length}</div>
      </button>
      <div>
        {!tasks.length ? (
          <span>Nenhuma tarefa cadastrada!</span>
        ) : (
          <div>
            {tasks.map((task, i) => (
              <ListItemContainer key={i} task={task} />
            ))}
          </div>
        )}
      </div>
    </Dropdown>
  );
}
