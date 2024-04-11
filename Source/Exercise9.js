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
            flex: 1
        },
        rowContainer: {
            flex: 2,
            justifyContent: 'space-between',
            alignItems: "center",
            flexDirection: "row",
        },
        rowButtonLeft: {
            flex: 3,
            height: "100%"
        },
        rowButtonRight: {
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '100%'
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1
        },
        button: {
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
    const buttontxt = [
        ['C', 'DEL'],
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', '.']
    ]

    const caculation = ['/', '*', '-', '+', '=']

    return (
        <View style={[styles.container]}>
            <View style={styles.resultView}>
                <TouchableOpacity
                    style={[styles.buttonChangeTheme,]}
                    onPress={() => { setIsDarkMode(!isDarkMode) }}
                >
                    <Feather name={isDarkMode ? "sun" : "moon"} size={24} color={isDarkMode ? "white" : "black"} />
                </TouchableOpacity>
                <Text style={styles.historytext}>{lastNumgber}</Text>
                <Text style={[styles.historytext, styles.resultText]}>{currentNumgber}</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.rowButtonLeft}>
                    {
                        buttontxt.map((row, index) => (
                            <View style={styles.row}>
                                {
                                    row.map((item) => (
                                        <Button name={item} style={{
                                            backgroundColor: (index == 0) ? "darkgrey" :
                                                isDarkMode ? "#3D3C42" : "#FEFBF6",
                                        }}

                                            onPress={() => HandleInput(item)}

                                        />
                                    ))
                                }
                            </View>
                        ))
                    }
                </View>
                <View style={styles.rowButtonRight}>
                    {caculation.map((item) => (
                        <Button name={item} onPress={() => HandleInput(item)} style={styles.blueTheme} />
                    ))}
                </View>
            </View>


        </View >
    );


}



export default Exercise9;