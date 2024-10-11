import React, { useState } from 'react';
import dustbin from './assets/dustbin-icon.jpeg'; // Assuming these are image paths
import editIcon from './assets/edit-icon.jpg'; // Consistent naming
import tick from './assets/tick.jpg';
import saveIcon from './assets/save-button-linear-icon-.png';

function ToDoItem({ task, deleteTask, toggleCompleted }) {
  const [isEditable, setIsEditable] = useState(false); // Use a descriptive name

  const handleEditClick = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  const handleContentChange = (event) => {
    if (editTask) { // Check if edit function is provided
      editTask(task.id, event.target.textContent); // Update task on change
    }
  };

  return (
    <li>
      <div
        className="list"
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          backgroundColor: 'white',
          color: 'red',
        }}
      >
        {isEditable ? (
          <div contentEditable onClick={handleContentChange} className="list_content">
            {task.text}
          </div>
        ) : (
          <div className="list_content">{task.text}</div>
        )}
       <button className="mark_btn" onClick={() => toggleCompleted(task.id)}>
       <img src={tick} alt="dustbin" height={20} />
        </button>

        <button className="delete_btn" onClick={() => deleteTask(task.id)}>
          <img src={dustbin} alt="dustbin" height={28} />
        </button>
        {!isEditable ? (
          <button className="edit_btn" onClick={handleEditClick}>
          <img src={editIcon} alt="edit" height={28} />
        </button>
        ) : (
          <button className="save_btn" onClick={handleEditClick}>
          <img src={saveIcon} alt="save" height={28} />
        </button>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;