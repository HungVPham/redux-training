import './index.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewToDoForm from './components/NewToDoForm';
import ToDoList from './components/ToDoList';
import { fetchTodos } from './crudAPI';

const TODOS_API = 'http://localhost:5000/todos';

export default function App() {
  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(TODOS_API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_TODOS', payload: data });
      });
  }, []);

  function toggleTheme() {
    dispatch({ type: 'TOGGLE_THEME' });
  }

  return (
    <div className="App">
      <h1>To-Do App w/ Redux-React</h1>
      <button onClick={toggleTheme}>Theme</button>
      <NewToDoForm />
      <ToDoList />
    </div>
  );
}
