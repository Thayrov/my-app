import {Text, View} from "react-native";

import React from "react";
import {styles} from './styles'

const Title = (props) => {
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleContent}>
                {props.text}
            </Text>
        </View>
    );
}

export default Title