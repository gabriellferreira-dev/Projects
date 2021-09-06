import React, { useContext, useEffect, useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem } from '../styledComponents/ListItem.style';
import { StyledItemContainer } from '../styledComponents/StyledItemContainer.style';
import { GlobalContext } from '../Context/TaskProvider';

export default function ListItemContainer({ task }) {
  const { completed, setCompleted, setTasks, tasks } = useContext(GlobalContext);
  const [activeTask, setActive] = useState(false);
  const [taskSelected, setSelected] = useState(false);
  const [concluded, setConcluded] = useState(false);

  const setConcludedTask = ({target}) => {
    setConcluded(!concluded);
    setCompleted(completed.length ? [...completed, task] : [task]);
    setTimeout(() => {
      setConcluded(false);
      setActive(false);
      setSelected(false);
      setTasks(tasks.filter(({id}) => id !== task.id));
    }, 200)
  };

  const clickTask = () => {
    setActive(true);
    setSelected(!taskSelected);
    setTimeout(() => {
      setActive(false);
    }, 100);
  };

  return (
    <ListItem
      active={activeTask}
      selected={taskSelected}
      concluded={concluded}
      rule='button'
      aria-label='select task'
      onClick={clickTask}
    >
      {/* <StyledItemContainer> */}
      <FontAwesomeIcon
        icon={faCheckCircle}
        rule='button'
        aria-label='set task concluded'
        onClick={setConcludedTask}
      />
      <span>{task.content}</span>
      {/* </StyledItemContainer> */}
    </ListItem>
  );
}
