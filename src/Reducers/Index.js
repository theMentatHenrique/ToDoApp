import { combineReducers } from 'redux';

import todoListReducer from './ToDoListReducer';
import editingTodoReducer from './EditingToDoReducers';

const rootReducer = combineReducers({
	todos: todoListReducer,
	editingTodo: editingTodoReducer
});

export default rootReducer;