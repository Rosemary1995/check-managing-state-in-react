import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TaskItem = ({ task, toggleComplete, deleteTask, startEditTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => toggleComplete(task.id)}>
        {task.completed ? <FaCheck /> : <FaCheck className="incomplete" />}
        {task.name}
      </span>
      <p>{task.description}</p>
      <button onClick={() => startEditTask(task)}><FaEdit /></button>
      <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
    </li>
  );
};

export default TaskItem;
