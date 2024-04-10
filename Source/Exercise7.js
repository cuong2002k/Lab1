
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Exercise7 = () => {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <Text
                style={styles.lable}
            >
                What is your name?
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(name) => setName(name)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => {
                        alert(`Hello ${name}`);
                        setName('');
                    }
                }
            >
                <Text
                    style={{ color: "blue" }}
                >
                    Say Hello
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#DDDDDD",
        marginTop: 5,
        marginBottom: 5
    },
    lable: {
        fontWeight: "bold",
        fontSize: 18
    },
    button: {
        alignItems: 'center',
    }
});

export default Exercise7;