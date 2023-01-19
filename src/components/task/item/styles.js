import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/theme/colors';

export const styles = StyleSheet.create({
	itemList: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.bgColor,
	},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: colors.itemBgColor,
		marginBottom: 10,
		borderRadius: 5,
	},
});
