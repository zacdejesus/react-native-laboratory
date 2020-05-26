import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card.js'
import Colors from '../constans/Colors.js'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputContainer}>
                <Text> select number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title="Reset" onPress={() => {}} color={Colors.secondary}/>
                    </View>
                    <View style={styles.button}>
                    <Button title="Confirm" onPress={() => {}} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        width: 100
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});
 
export default StartGameScreen;