import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Exercise2 = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => { alert("You clicked the button!") }} >
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 15,
        alignItems: "center"
    },
});
export default Exercise2;