import { AddItem, TaskList, TaskModal, TextHolder, Title } from './components';
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
	const onUserSubmit = () => {
		setTasks([
			...tasks,
			{
				id: tasks.length + 1,
				value: task,
			},
		]);
		setTask('');
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
			prevTaskList.filter((task) => task.id !== SelectedTask.id),
		);
		setIsModalVisible(!isModalVisible);
	};
	const onHandlerCheck = () => {
		''
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Title text= 'Tasks List'/>
			<TextHolder 
				text = 'Para usar esta lista, ingresa tu tarea en la sección siguiente y luego puedes dar click en cada tarea creada para borrarla o marcarla como realizada.'
			/>
			<AddItem
				buttonText='  +  '
				buttonColor = {colors.highlightsColor}
				onUserChange = {onUserChange}
				onUserSubmit = {onUserSubmit}
				placeholder = 'Ingresa tu tarea'
				task = {task}
			/>
			<TaskList
				tasks = {tasks}
				onHandlerModal = {onHandlerModal}
			/>
			<TaskModal
				isModalVisible = {isModalVisible}
				SelectedTask = {SelectedTask}
				modalContent = {'Contenido:'}
				color1 = {colors.bgColor}
				color2 = {colors.warningColor}
				color3 = {colors.highlightsColor}
				onHandlerCancel = {onHandlerCancel}
				onHandlerDelete = {onHandlerDelete}
				onHandlerCheck = {onHandlerCheck}
			/>
			<TextHolder 
				text = 'Gracias por revisar este proyecto académico, es sin fines de lucro y fue realizado por Thayrov García'
			/>
		</View>
	);
}


export default App;