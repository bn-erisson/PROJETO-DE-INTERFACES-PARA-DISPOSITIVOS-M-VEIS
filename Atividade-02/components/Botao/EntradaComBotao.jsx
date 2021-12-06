import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

class EntradaComBotao extends Component {

    constructor(props) {
        super(props)
        this.state = { texto: '' }
    }

    acaoBotao = () => {
        alert(this.state.texto)
    }

    render() {
        return (
            <View style={estilos.container}>
                <Text>{this.state.texto}</Text>
                <Text style={estilos.cabecalho}>Teste com botão</Text>
                <TextInput style={estilos.campo} onChangeText={(texto) => this.setState({ texto })}></TextInput>
                <View style={estilos.botao}><Button
                    title='Pegar o texto'
                    color="blue"
                    borderRadius="20"
                    onPress={this.acaoBotao}>

                </Button></View>
            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5'
        },
        cabecalho: {
            fontSize: 24,
            fontWeight: 'bold'

        },
        campo: {
            width: 200,
            height: 40,
            color: 'white',
            borderRadius: 20,
            backgroundColor: '#165c7a',
            margin: 10,
            padding: 10,

        },
        botao: {
            width: 200,
            height: 40,
            color: 'white',
            borderRadius: 20,
            backgroundColor: '#165c7a'
        }
    }
)

export default EntradaComBotao