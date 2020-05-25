import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {
    return (
        <View style = {styles.header}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f1287b',
        alignContent: "center",
        alignItems: 'center'
    },
    headerTilte: {
        color: 'black',
        fontSize: 25,
    }
});

export default Header;