import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, props.style]}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const Exercise3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button text="Say Hello" onPress={() => alert("hello world!!!")} />
            <Button text="Say Good Bye" style={{ backgroundColor: "aqua" }} onPress={() => alert("Good Bye World!!!")} />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 15,
        alignItems: "center"
    },
    text: {
        color: "black"
    }
});

export default Exercise3;