import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, {useState} from 'react';

import {StatusBar} from 'expo-status-bar';

export default function App() {
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
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#424C5E',
		height: 45,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 60,
		paddingHorizontal: 20,
	},
	input: {
		width: '88%',
		backgroundColor: '#f9f9f9',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		fontSize: 20,
		color: '#424C5E',
		fontFamily: 'monospace',
		fontWeight: 'bold',
	},
	listContainer: {
		marginHorizontal: 20,
		marginTop: 40,
	},
	itemList: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#424C5E',
	},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#CDFDFA',
		marginBottom: 10,
		borderRadius: 5,
	},
	modalContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
		paddingVertical: 20,
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	modalContentContainer: {
		paddingVertical: 20,
	},
	modalContent: {
		fontSize: 14,
		color: 'gray',
	},
	contentDetails: {
		fontSize: 14,
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		paddingVertical: 10,
		marginBottom: 20,
	},
	modalButtonCaontainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
