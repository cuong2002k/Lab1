import { StyleSheet, TouchableOpacity, View, Text, Vibration } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons';
import App from "../App";
import { useState } from "react";
import React from "react";



const Exercise9 = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentNumgber, setcurrentNumgber] = useState("");
    const [lastNumgber, setlastNumgber] = useState("");
    function Caculator() {
        let lastValue = currentNumgber[currentNumgber.length - 1];
        if (lastValue === '+' || lastValue === '-' || lastValue === '*' || lastValue === '/') {
            setcurrentNumgber(currentNumgber);
            return;
        }

        let result = eval(currentNumgber).toString();
        setcurrentNumgber(result);
        return;
    }
    function HandleInput(HandleInput) {
        if (HandleInput === '+' || HandleInput === '-' || HandleInput === '*' || HandleInput === '/') {
            Vibration.vibrate(35);
            setcurrentNumgber(currentNumgber + HandleInput);
            return;
        }
        switch (HandleInput) {
            case 'DEL':
                Vibration.vibrate(35);
                setcurrentNumgber(currentNumgber.substring(0, (currentNumgber.length - 1)));
                return;
            case 'C':
                Vibration.vibrate(35);
                setlastNumgber("");
                setcurrentNumgber("");
                return;
            case '=':
                Vibration.vibrate(35);
                setlastNumgber(currentNumgber + HandleInput);
                Caculator();
                return;
        }
        Vibration.vibrate(35);
        setcurrentNumgber(currentNumgber + HandleInput);

    }

    const styles = StyleSheet.create({
        container:
        {
            flex: 1,
            backgroundColor: isDarkMode ? "#3D3C42" : "#FEFBF6",
        },
        buttonChangeTheme: {
            backgroundColor: "#ccc",
            borderRadius: 10,
            height: 50,
            width: 50,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            margin: 15
        },
        historytext: {
            color: isDarkMode ? "#FEFBF6" : "#3D3B40",
            alignSelf: "flex-end",
            fontSize: 18
        },
        resultText: {
            fontSize: 50,
            color: "#068FFF"
        },
        resultView: {
            padding: 10,
            maxwidth: "100%",
            minHeight: "35%",
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap',
            flex: 2
        },
        button: {
            backgroundColor: isDarkMode ? "#3D3C42" : "#FEFBF6",
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            height: "100%"

        },
        blueTheme: {
            backgroundColor: "#34B3F1",
        }

    })
    const Button = (props) => {
        return (
            <TouchableOpacity
                onPress={props.onPress}
                style={[styles.button, props.style]}
            >
                <Text style={{ color: isDarkMode ? "white" : "black", fontSize: 18 }} >{props.name}</Text>
            </TouchableOpacity>
        );
    }
    const buttontxt = ['C', 'DEL', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

    return (
        <View style={[styles.container]}>
            <View style={styles.resultView}>
                <TouchableOpacity
                    style={styles.buttonChangeTheme}
                    onPress={() => { setIsDarkMode(!isDarkMode) }}
                >
                    <Feather name={isDarkMode ? "sun" : "moon"} size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <Text style={styles.historytext}>{lastNumgber}</Text>
                <Text style={[styles.historytext, styles.resultText]}>{currentNumgber}</Text>
            </View>


            <View style={styles.row}>
                <View style={styles.button} />
                <Button
                    name={buttontxt[0]}
                    onPress={() => HandleInput(buttontxt[0])}
                />
                <Button
                    name={buttontxt[1]}
                    onPress={() => HandleInput(buttontxt[1])}
                />
                <Button
                    name={buttontxt[2]}
                    onPress={() => HandleInput(buttontxt[2])}
                    style={styles.blueTheme}
                />
            </View>
            <View style={styles.row}>
                <Button
                    name={buttontxt[3]}
                    onPress={() => HandleInput(buttontxt[3])}
                />
                <Button
                    name={buttontxt[4]}
                    onPress={() => HandleInput(buttontxt[4])}
                />
                <Button
                    name={buttontxt[5]}
                    onPress={() => HandleInput(buttontxt[5])}
                />
                <Button
                    name={buttontxt[6]}
                    style={styles.blueTheme}
                    onPress={() => HandleInput(buttontxt[6])}
                />
            </View>

            <View style={styles.row}>
                <Button
                    name={buttontxt[7]}
                    onPress={() => HandleInput(buttontxt[7])}
                />
                <Button
                    name={buttontxt[8]}
                    onPress={() => HandleInput(buttontxt[8])}
                />
                <Button
                    name={buttontxt[9]}
                    onPress={() => HandleInput(buttontxt[9])}
                />
                <Button
                    name={buttontxt[10]}
                    style={styles.blueTheme}
                    onPress={() => HandleInput(buttontxt[10])}
                />
            </View>

            <View style={styles.row}>
                <Button
                    onPress={() => HandleInput(buttontxt[11])}
                    name={buttontxt[11]}
                />
                <Button
                    name={buttontxt[12]}
                    onPress={() => HandleInput(buttontxt[12])}
                />
                <Button
                    name={buttontxt[13]}
                    onPress={() => HandleInput(buttontxt[13])}
                />
                <Button
                    name={buttontxt[14]}
                    onPress={() => HandleInput(buttontxt[14])}
                    style={styles.blueTheme}
                />
            </View>

            <View style={styles.row}>
                <View style={styles.button} />
                <Button
                    name={buttontxt[15]}
                    onPress={() => HandleInput(buttontxt[15])}
                />
                <Button
                    name={buttontxt[16]}
                    onPress={() => HandleInput(buttontxt[16])}
                />
                <Button
                    name={buttontxt[17]}
                    style={styles.blueTheme}
                    onPress={() => HandleInput(buttontxt[17])}
                />
            </View>
        </View >
    );


}



export default Exercise9;