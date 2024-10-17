// Import necessary libraries
import React, { useState } from 'react';

// Define the TodoList component
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [category, setCategory] = useState('Work');
  const [dueDate, setDueDate] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (taskInput) {
      const newTask = { text: taskInput, category, dueDate };
      setTasks([...tasks, newTask]);
      setTaskInput(''); // Clear input
      setDueDate(''); // Clear due date
    }
  };

  return (
    <div>
      <h2>My To-Do List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} [{task.category}] {task.dueDate && `Due: ${task.dueDate}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;