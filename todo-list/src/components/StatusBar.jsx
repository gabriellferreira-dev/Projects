import React, { useContext } from 'react';
import { StatusBar } from '../styledComponents/StatusBar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../Context/TaskProvider';

export default function Bar({size}) {
  const { completed } = useContext(GlobalContext);
  return (
    <StatusBar>
      <div>
        <div>{completed.length}</div>
        <FontAwesomeIcon icon={faTasks} />
      </div>
    </StatusBar>
  );
}
