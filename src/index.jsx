import { AddItem, TaskList, TaskModal } from './components';
import React, {useState} from 'react';

import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {colors} from './constants/theme/colors'
import {styles} from './styles'

const App = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [SelectedTask, setSelectedTask] = useState(null);

	const onUserChange = text => {
		setTask(text);
	};
	const onUserSubmit = text => {
		setTasks([
			...tasks,
			{
				id: tasks.length + 1,
				value: task,
			},
		]);
	};
	const onHandlerModal = item => {
		setIsModalVisible(!isModalVisible);
		setSelectedTask(item);
	};

	const onHandlerCancel = () => {
		setIsModalVisible(!isModalVisible);
		setSelectedTask(null);
	};
	const onHandlerDelete = () => {
		setTasks(prevTaskList =>
			prevTaskList.filter(task => task.id !== SelectedTask.id),
		);
		setIsModalVisible(!isModalVisible);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<AddItem>
				placeholder = {"Ingresa tu tarea"}
				task = {task}
				onUserChange = {onUserChange}
				onUserSubmit = {onUserSubmit}
				buttonText = {"  +  "}
				buttonColor = {colors.highlightsColor}
			</AddItem>
			<TaskList
				tasks = {tasks}
				onHandlerModal = {onHandlerModal}
			/>
			<TaskModal
				isModalVisible = {isModalVisible}
				modalContent = {'Contenido'}
				color1 = {colors.highlightsColor}
				color2 = {colors.warningColor}
				onHandlerCancel = {onHandlerCancel}
				onHandlerDelete = {onHandlerDelete}
			/>
		</View>
	);
}


export default App;