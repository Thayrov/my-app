import { Text, TouchableOpacity } from 'react-native';

import React from "react";
import {styles} from './styles';

const TaskItem = ({item, onHandlerModal,isTaskChecked}) => {
    return (
        <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onHandlerModal(item)}>
        <Text style={styles.itemList }>{item.value}</Text>
        <Text style={{display: {isTaskChecked} ?  'none':'flex'}}>¡   X   !</Text>

        </TouchableOpacity> 
    )
}

export default TaskItem
