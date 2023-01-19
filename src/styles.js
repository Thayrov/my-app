import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
