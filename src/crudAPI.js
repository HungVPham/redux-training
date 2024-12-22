const TODOS_API_URL = 'http://localhost:5000/todos';

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch(TODOS_API_URL);
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await fetch(TODOS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    const newTodo = await response.json();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const editTodo = (id, newToDo) => async (dispatch) => {
  try {
    await fetch('${TODOS_API_URL}/${id}', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newToDo),
    });
    dispatch({ type: 'EDIT_TODO', payload: { id, newToDo } });
  } catch (error) {
    console.error('Error editing todo:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await fetch('${TODOS_API_URL}/${id}', {
      method: 'DELETE',
    });
    dispatch({ type: 'DELETE_TODO', payload: id });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
