import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
	modalButtonContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
