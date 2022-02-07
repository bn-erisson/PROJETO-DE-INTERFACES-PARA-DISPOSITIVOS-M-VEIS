import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0b3040',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '100%',
        marginVertical: 10,
        height: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});