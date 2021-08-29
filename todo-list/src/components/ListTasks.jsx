import React, { useContext } from 'react';
import { GlobalContext } from '../Context/TaskProvider';
import { ListItem } from '../styledComponents/ListItem.style';

export default function ListTasks() {
  const { tasks } = useContext(GlobalContext);
  console.log(tasks)
  if (tasks) {
    return tasks.map((task, i) => <ListItem key={i}>{task}</ListItem>)
  }
  return null;
}