import { ScrollView, StyleSheet, Text, View } from "react-native";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const Exercise6 = () => {
    return (
        <ScrollView>
            {numbers.map((number, index) => (
                <View key={index} style={styles.box1} >
                    <Text>
                        {number}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    box1: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "steelblue",
        margin: 10
    }
});
export default Exercise6;