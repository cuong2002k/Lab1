import { StyleSheet, Text, View } from "react-native";

const Exercise1 = () => {
    return (
        <View style={styles.box}>
            <Text>
                Hello World!!!
            </Text>
        </View>
    );
}

export default Exercise1;

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    }
});