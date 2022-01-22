import React, { Component } from "react";
import { Alert, StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default class Tocavel extends Component {
    /*constructor(props) {
        super(props)
        this.state = { texto: '' }
    }*/

    acaoBotao = () => {
        alert('Apertei')
    }

    render(){
        return(
            <View style={estilos.container}>
                <TouchableHighlight onPress={this.acaoBotao} underlayColor='red'>
                    <View style={estilos.botao}>
                        <Text style={estilos.textobotao}>
                            Tocável
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container: {
            paddingTop: 100,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        },
        botao: {
            width: 200,
            alignItems: 'center',
            backgroundColor: '#2196f3'
        },
        textobotao:{
            color: '#fff',
            padding: 20,
            fontSize: 20
        }
        
    }
)