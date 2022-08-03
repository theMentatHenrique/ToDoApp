import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './ToDoListItem'
import { toggleTodo, setEditingTodo } from '../Actions/Index';

const TodoList = ({
	todos,
	dispatchToggleTodo,
	dispatchSetEditingTodo
}) => (
	<View>
		{todos.map(todo => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				onPressTodo={() => dispatchToggleTodo(todo.id)}
				onLongPressTodo={() => dispatchSetEditingTodo(todo)}
			/>
		))}
	</View>
);

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
	console.log(state)
	const { todos } = state;
	return { todos };
}

export default connect(
	mapStateToProps,
	{
		dispatchToggleTodo: toggleTodo,
		dispatchSetEditingTodo: setEditingTodo
	}
)(TodoList);