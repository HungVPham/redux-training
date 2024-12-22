import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ToDo = ({ todo }) => {
  const { id, title, completed } = todo;
  const [isEdit, setIsEdit] = useState(false);
  const [formState, setFormState] = useState({ title, completed });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value, // Proper checkbox handling
    }));
  };

  const editToDo = (id, newToDo) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, newToDo } });
  };

  const deleteById = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  if (isEdit) {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="checkbox"
            name="completed"
            checked={formState.completed}
            onChange={handleChange}
          />
        </td>
        <td>
          <button
            onClick={() => {
              editToDo(id, formState);
              setIsEdit(false);
            }}
          >
            Save
          </button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) =>
            editToDo(id, { ...todo, completed: e.target.checked })
          }
        />
      </div>

      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={() => deleteById(id)}>Delete</button>
    </div>
  );
};

export default ToDo;
