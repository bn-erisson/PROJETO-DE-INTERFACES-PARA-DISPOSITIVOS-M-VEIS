import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Calculadora from './Calculadora'


export default class CalculadoraApp extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null }
    }



    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 50,

            }}>
                <TextInput style={{
                    width: 200,
                    height: 40,
                    color: 'white',
                    borderRadius: 20,
                    backgroundColor: '#165c7a',
                    margin: 10,
                    padding: 10

                }}
                    keyboardType="numeric"
                    placeholder='Digite a a altura'
                    placeholderTextColor={'white'}
                    onChangeText={(valorDoCampo) => this.setState({ altura: valorDoCampo })}></TextInput>

                <TextInput style={{
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
                    onChangeText={(valorDoCampo) => this.setState({ peso: valorDoCampo })}></TextInput>

                <Calculadora altura={this.state.altura} peso={this.state.peso}></Calculadora>
            </View>
        )

    }
}

// 46:29