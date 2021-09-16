import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/TaskProvider';
import { Dropdown } from '../styledComponents/Dropdown.style';
import ListItemContainer from './ListItemContainer';

export default function CompletedTasks() {
  const { completed } = useContext(GlobalContext);
  const [isActive, setActive] = useState(false);

  const buttonStyle = {
    bgColor: 'rgb(254, 145, 105)',
  };

  return (
    <Dropdown
      active={isActive}
      buttonStyle={buttonStyle}
      haveTask={!!completed.length}
    >
      <button onClick={() => setActive(!isActive)}>
        <span>CONCLUÍDAS</span>
        <div>{completed.length}</div>
      </button>
      <div>
        {!completed.length ? (
          <span>Nenhuma tarefa concluída!</span>
        ) : (
          <div>
            {completed.map((task, i) => (
              <ListItemContainer key={i} task={task} />
            ))}
          </div>
        )}
      </div>
    </Dropdown>
  );
}
