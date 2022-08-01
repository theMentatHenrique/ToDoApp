import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoForm from '../Components/ToDoForm';
import TodoList from '../Components/ToDoList';

import rootReducer from '../Reducers/Index';
//import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<TodoForm />
					<TodoList />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30
	}
});