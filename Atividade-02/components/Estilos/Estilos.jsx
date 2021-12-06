import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    vermelho: {
        color: 'red'
    },
    grandeAzul: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
})

const estudoEstilos = () =>
    <View>
        <Text style={estilos.vermelho}>
            Somente vermelho
        </Text>
        <Text style={estilos.grandeAzul}>
            Grande azul
        </Text>
        <Text style={estilos.vermelho, estilos.grandeAzul}>
            Apenas um teste
        </Text>
    </View>



export default estudoEstilos