import { Button, Modal, Text, View } from 'react-native';

import React from "react";
import {styles} from './styles';

const TaskModal = ({isModalVisible, SelectedTask, modalContent,color1, color2,color3, onHandlerCancel,onHandlerDelete, onHandlerCheck} ) => {
    return (
        <Modal visible={isModalVisible} animationType="slide ">
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Detalles</Text>
                <View style={styles.modalContentContainer}>
                    <Text style={styles.modalContent}>{modalContent}</Text>
                    <Text style={styles.contentDetails}>{SelectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button title="Cancel" color={color1} onPress={onHandlerCancel} />
                    <Button title="Check" color={color3} onPress={onHandlerCheck} />
                    <Button title="Delete" color={color2} onPress={onHandlerDelete} />
                </View>
            </View>
        </Modal>

    )


}

export default TaskModal
