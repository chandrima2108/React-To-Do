import React, { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
 
  return (
    <div className="App">
      <Header />
      <ToDoList tasks={tasks} addTask={addTask} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      
  </div>
  );
  
}

export default App;
