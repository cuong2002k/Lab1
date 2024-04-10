import { StyleSheet, Text } from "react-native";
import { View } from "react-native-web";
import React from "react";
const Box = (props) => {
    return (
        <View style={[styles.box1, props.style]} >
            <Text>
                {props.Text}
            </Text>
        </View>
    );
}
const Exercise5 = () => {
    return (
        <View style={styles.container}>
            <Box Text="box1" style={{ backgroundColor: "powderblue" }} />
            <Box Text="box2" style={{ backgroundColor: "skyblue" }} />
            <Box Text="box3" style={{ backgroundColor: "steelblue" }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    },
    box1: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: 'center'
    }
});
export default Exercise5;