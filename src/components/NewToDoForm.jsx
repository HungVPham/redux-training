import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const NewToDoForm = () => {
  const [newToDo, setNewToDo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuidv4(),
        title: newToDo,
        completed: false,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default NewToDoForm;
