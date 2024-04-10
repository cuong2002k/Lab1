import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exercise1 from './Source/Exercise1';
import Exercise2 from './Source/Exercise2';
import Exercise3 from './Source/Exercise3';
import Exercise4 from './Source/Exercise4';
import Exercise5 from './Source/Exercise5';
import Exercise6 from './Source/Exercise6';
import Exercise7 from './Source/Exercise7';
import Exercise8 from './Source/Exercise8';
import Exercise9 from './Source/Exercise9';
const Stack = createNativeStackNavigator();
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
export default function App({ navigation }) {
  return (
    < NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Exercise1" component={Exercise1} />
        <Stack.Screen name="Exercise2" component={Exercise2} />
        <Stack.Screen name="Exercise3" component={Exercise3} />
        <Stack.Screen name="Exercise4" component={Exercise4} />
        <Stack.Screen name="Exercise5" component={Exercise5} />
        <Stack.Screen name="Exercise6" component={Exercise6} />
        <Stack.Screen name="Exercise7" component={Exercise7} />
        <Stack.Screen name="Exercise8" component={Exercise8} />
        <Stack.Screen name="Exercise9" component={Exercise9} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Button text="ex1" onPress={() => navigation.navigate('Exercise1')} />
      <Button text="ex2" onPress={() => navigation.navigate('Exercise2')} />
      <Button text="ex3" onPress={() => navigation.navigate('Exercise3')} />
      <Button text="ex4" onPress={() => navigation.navigate('Exercise4')} />
      <Button text="ex5" onPress={() => navigation.navigate('Exercise5')} />
      <Button text="ex6" onPress={() => navigation.navigate('Exercise6')} />
      <Button text="ex7" onPress={() => navigation.navigate('Exercise7')} />
      <Button text="ex8" onPress={() => navigation.navigate('Exercise8')} />
      <Button text="ex9" onPress={() => navigation.navigate('Exercise9')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
    alignItems: "center"
  },
});
