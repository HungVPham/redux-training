import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from './ToDo';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos);

  return (
    <div>
      <h2>Task List</h2>
      <div>
        {todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
