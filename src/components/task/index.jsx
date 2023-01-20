import {FlatList} from 'react-native';
import React from "react";
import TaskItem from './item/index'
import {styles} from './styles';

const TaskList = ({tasks, onHandlerModal,isTaskChecked}) => {
    const renderItem = ({item}) => (
        <TaskItem
            isTaskChecked = {isTaskChecked}
            item = {item}
            onHandlerModal = {onHandlerModal}
        />
    );
    const keyExtractor = item => item.id;
    return(
        <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.listContainer}
        />
    );
};

export default TaskList