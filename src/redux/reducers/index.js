import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todosReducer,
});

export default rootReducer;
