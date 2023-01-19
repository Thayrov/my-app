import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme/colors';

export const styles = StyleSheet.create({
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		backgroundColor: colors.bordersColor,
		margin: 20,
		borderRadius: 5,
	},
	textContent: {
		fontSize: 14,
		fontStyle: 'italic',
		color: colors.bgColor,
	},
});
