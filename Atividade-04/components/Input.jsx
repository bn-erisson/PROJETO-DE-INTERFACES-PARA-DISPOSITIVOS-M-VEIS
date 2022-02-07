import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ placeholder, onChangeText, keyboardType }) => {
    return (
        <TextInput style={styles.textInput}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={value => onChangeText(value)}
        />
    )
}

export default Input

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        height: 40,
        color: 'white',
        borderRadius: 20,
        backgroundColor: '#165c7a',
        margin: 10,
        padding: 10
    },
});


/* style={{
                    width: 200,
                    height: 40,
                    color: 'white',
                    borderRadius: 20,
                    backgroundColor: '#165c7a',
                    margin: 10,
                    padding: 10

                }}
                    keyboardType="numeric"
                    placeholder='Digite o peso'
                    placeholderTextColor={'white'}
                    onChangeText={(valorDoCampo) => this.setState({ peso: valorDoCampo })}*/