import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/colors';

export const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingHorizontal: 20,
	},
	input: {
		width: '88%',
		backgroundColor: colors.inputBgColor,
		borderWidth: 1,
		borderColor: colors.bordersColor,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		fontSize: 20,
		color: colors.bgColor,
		fontFamily: 'monospace',
		fontWeight: 'bold',
	},
});
