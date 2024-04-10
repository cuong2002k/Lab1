import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Exercise4 = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>
                You've pressed button:{count} s(time)
            </Text>

            <TouchableOpacity
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.text}>
                    Pressed me
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: 'blue',
        fontSize: 16
    }
});
export default Exercise4;