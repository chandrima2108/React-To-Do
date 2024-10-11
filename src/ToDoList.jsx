import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';

function ToDoList({ tasks, addTask, deleteTask, toggleCompleted }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
       setNewTask('');
    }
  };

  return (
    <div id="input_list">
      <div id='input'>
      <input
        
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add" onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
           
          />
))}
      </ul>
    </div>
  );
}

export default ToDoList;
