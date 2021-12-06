import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import IMCCalc from "./IMCCalc";


export default class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: null, peso: null, apertou: false }
    }

    acaoBotao = () => {
        this.setState({ apertou: true })
        alert("apertou")

    }

    renderizar() {
        if (this.state.apertou) {
            
            return (
                <IMCCalc altura={this.state.altura} peso={this.state.peso}></IMCCalc>
            )
        }
        /*this.setState({apertou:false})*/

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

                <Button
                    title='Calcular'
                    color="#0b3040"
                    borderRadius="20"
                    onPress={this.acaoBotao}>

                </Button>
                {this.renderizar()}

            </View>
        )

    }
}

