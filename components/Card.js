import React from 'react'
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...style.card, ...props.style }}>{props.children}</View>
}

const style = StyleSheet.create ({
card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white'
}
})
export default Card;