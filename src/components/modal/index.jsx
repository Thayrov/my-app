import { Button, Modal, Text, View } from 'react-native';

import React from "react";
import {styles} from './styles';

const TaskModal = (isModalVisible, modalContent,color1, color2, onHandlerCancel,onHandlerDelete ) => {
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
                    <Button title="Delete" color={color2} onPress={onHandlerDelete} />
                </View>
            </View>
        </Modal>

    )


}

export default TaskModal
