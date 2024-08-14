import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
      setIsEditing(true);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      if (isEditing) {
        editTask({ ...taskToEdit, name: taskName, description: taskDescription });
        clearEdit();
      } else {
        addTask({ name: taskName, description: taskDescription, completed: false });
      }
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
      {isEditing && <button onClick={clearEdit}>Cancel Edit</button>}
    </form>
  );
};

export default TaskForm;
