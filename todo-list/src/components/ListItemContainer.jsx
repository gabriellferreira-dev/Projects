import React, { useContext, useEffect, useState } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListItem } from '../styledComponents/ListItem.style';
import { GlobalContext } from '../Context/TaskProvider';
import moment from 'moment';

export default function ListItemContainer({ task }) {
  const { completed, setCompleted, setTasks, tasks } =
    useContext(GlobalContext);
  const [activeTask, setActive] = useState(false);
  const [taskSelected, setSelected] = useState(false);
  const [concluded, setConcluded] = useState(false);
  const { createdIn: date } = task;

  useEffect(() => {
    console.log(moment(date).format('DD/MM/YYYY HH:MM:SS'));
  }, [date]);

  const updateStorage = () => {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
    if (completedTasks) {
      localStorage.setItem(
        'completedTasks',
        JSON.stringify([...completedTasks, task])
      );
    } else {
      localStorage.setItem('completedTasks', JSON.stringify([task]));
    }
    const newTasks = tasks.filter(({ id }) => id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const setConcludedTask = () => {
    setConcluded(!concluded);
    setCompleted(completed.length ? [...completed, task] : [task]);
    updateStorage();
    setTimeout(() => {
      setConcluded(false);
      setActive(false);
      setSelected(false);
      setTasks(tasks.filter(({ id }) => id !== task.id));
    }, 200);
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
      data-testid={`task-${task.id}`}
      active={activeTask}
      selected={taskSelected}
      concluded={concluded}
      rule='button'
      aria-label='select task'
      onClick={clickTask}
    >
      <FontAwesomeIcon
        data-testid={`mark-task-${task.id}-concluded`}
        icon={faCheckCircle}
        rule='button'
        aria-label='set task concluded'
        onClick={setConcludedTask}
      />
      <span>{task.content}</span>
      {/* <span>{date}</span> */}
    </ListItem>
  );
}
