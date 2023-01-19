import { Button, TextInput, View } from "react-native";

import React from "react";
import {styles} from './styles'

const AddItem = ({placeholder, task, onUserChange, onUserSubmit, buttonColor, buttonText}) => {
    return ( 			
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder= {placeholder}
                autoComplete='off'
                autoCorrect={false}
                autoCapitalize='none'
                value={task}
                onChangeText={onUserChange}
            />
            <Button
                disabled={!task}
                title={buttonText}
                color={buttonColor}
                onPress={onUserSubmit}
            />
        </View>
    )
} 

export default AddItem