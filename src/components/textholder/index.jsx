import {Text, View} from "react-native";

import React from "react";
import {styles} from './styles'

const TextHolder = (props) => {
    return(
        <View style={styles.textContainer}>
            <Text style={styles.textContent}>
                {props.text}
            </Text>
        </View>
    );
}

export default TextHolder