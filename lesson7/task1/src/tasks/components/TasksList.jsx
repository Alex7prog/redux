import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, onDelete, onChange }) => {
  return (
    <ul className="list">
      {tasks.map(task => (
        <Task key={task.id} {...task} onDelete={onDelete} onChange={onChange} />
      ))}
    </ul>
  );
};
TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default TasksList;
