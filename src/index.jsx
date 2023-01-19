import {
	Button,
	FlatList,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, {useState} from 'react';

import {StatusBar} from 'expo-status-bar';
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
	const renderItem = ({item}) => (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => onHandlerModal(item)}>
			<Text style={styles.itemList}>{item.value}</Text>
		</TouchableOpacity>
	);
	const keyExtractor = item => item.id;
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
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Ingresa tu tarea"
					value={task}
					onChangeText={onUserChange}
				/>
				<Button
					disabled={!task}
					title="  +  "
					color="#5FFBF1"
					onPress={onUserSubmit}
				/>
			</View>
			<FlatList
				data={tasks}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				style={styles.listContainer}
			/>
			<Modal visible={isModalVisible} animationType="slide ">
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Detalles</Text>
					<View style={styles.modalContentContainer}>
						<Text style={styles.modalContent}>Contenido</Text>
						<Text style={styles.contentDetails}>{SelectedTask?.value}</Text>
					</View>
					<View style={styles.modalButtonCaontainer}>
						<Button title="Cancel" color="#5FFBF1" onPress={onHandlerCancel} />
						<Button title="Delete" color="red" onPress={onHandlerDelete} />
					</View>
				</View>
			</Modal>
		</View>
	);
}


export default App;