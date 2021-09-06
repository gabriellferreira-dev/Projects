import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../Context/TaskProvider';
import { ListTasks as Ul } from '../styledComponents/ListTasks.style';
import ListItemContainer from '../components/ListItemContainer';

export default function ListTasks() {
  const { tasks, completed } = useContext(GlobalContext);
  const listTasksRef = useRef();

  console.log(tasks)
  console.log(completed)

  useEffect(() => {
    const getHeight = () => {
      const list = listTasksRef.current;
      console.log(list.clientHeight);
    };
    getHeight();
  }, [tasks]);

  if (tasks) {
    return (
      <Ul ref={listTasksRef}>
        {tasks.map((task, i) => (
          <ListItemContainer key={i} task={task} />
        ))}
      </Ul>
    );
  }
  return null;
}
